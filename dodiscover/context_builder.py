import types
from typing import Any, Callable, Dict, Optional, Set, Tuple, cast

import networkx as nx
import pandas as pd

from context import Context
from typing import Column, NetworkxGraph
from _protocol import Graph


CALLABLES = types.FunctionType, types.MethodType


class ContextBuilder:
    """A builder class for creating observational data Context objects ergonomically.

    The ContextBuilder is meant solely to build Context objects that work
    with observational datasets.

    The context builder provides a way to capture assumptions, domain knowledge,
    and data. This should NOT be instantiated directly. One should instead use
    `dodiscover.make_context` to build a Context data structure.
    """

    _init_graph: Optional[Graph] = None
    _included_edges: Optional[NetworkxGraph] = None
    _excluded_edges: Optional[NetworkxGraph] = None
    _observed_variables: Optional[Dict[Column, str]] = None
    _observed_variables_descriptions: Optional[Dict[Column, str]] = None
    _latent_variables: Optional[Dict[Column, str]] = None
    _latent_variables_descriptions: Optional[Dict[Column, str]] = None
    _state_variables: Dict[str, Any] = dict()

    def __init__(self) -> None:
        # perform an error-check on subclass definitions of ContextBuilder
        for attribute, value in self.__class__.__dict__.items():
            if isinstance(value, CALLABLES) or isinstance(value, property):
                continue
            if attribute.startswith("__"):
                continue

            if not hasattr(self, attribute[1:]):
                raise RuntimeError(
                    f"Context objects has class attributes that do not have "
                    f"a matching class method to set the attribute, {attribute}. "
                    f"The form of the attribute must be '_<name>' and a "
                    f"corresponding function name '<name>'."
                )

    def init_graph(self, graph: Graph) -> "ContextBuilder":
        """Set the partial graph to start with.

        Parameters
        ----------
        graph : Graph
            The new graph instance.

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        self._init_graph = graph
        return self

    def included_edges(self, include: Optional[NetworkxGraph]) -> "ContextBuilder":
        """Set inclusion edge constraints to apply in discovery.

        Parameters
        ----------
        included : Optional[NetworkxGraph]
            Edges that should be included in the resultant graph

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        if self._excluded_edges is not None:
            for u, v in include.edges:  # type: ignore
                if self._excluded_edges.has_edge(u, v):
                    raise RuntimeError(f"{(u, v)} is already specified as an excluded edge.")
        self._included_edges = include
        return self

    def excluded_edges(self, exclude: Optional[NetworkxGraph]) -> "ContextBuilder":
        """Set exclusion edge constraints to apply in discovery.

        Parameters
        ----------
        excluded : Optional[NetworkxGraph]
            Edges that should be excluded in the resultant graph

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        if self._included_edges is not None:
            for u, v in exclude.edges:  # type: ignore
                if self._included_edges.has_edge(u, v):
                    raise RuntimeError(f"{(u, v)} is already specified as an included edge.")
        self._excluded_edges = exclude
        return self

    def edges(
        self,
        include: Optional[NetworkxGraph] = None,
        exclude: Optional[NetworkxGraph] = None,
    ) -> "ContextBuilder":
        """Set edge constraints to apply in discovery.

        Parameters
        ----------
        included : Optional[NetworkxGraph]
            Edges that should be included in the resultant graph
        excluded : Optional[NetworkxGraph]
            Edges that must be excluded in the resultant graph

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        self._included_edges = include
        self._excluded_edges = exclude
        return self

    def observed_variables(self, observed: Optional[Dict[Column, str]] = None) -> "ContextBuilder":
        """Set observed variables.

        Parameters
        ----------
        observed : Optional[Dict[Column, str]]
            Dictionary of observed variables along witht their datatype, by default None. 
            If neither ``latents``, nor ``variables`` is set, then it is presumed 
            that ``variables`` consists of the columns of ``data`` and 
            ``latents`` is the empty set.
        """
        if self._latent_variables is not None and any(
            obs_var in self._latent_variables.keys() for obs_var in observed.keys()  # type: ignore
        ):
            raise RuntimeError(
                f"Latent variables are set already {self._latent_variables}, "
                f'which contain variables you are trying to set as "observed".'
            )
        self._observed_variables = observed
        return self

    def observed_variables_descriptions(self, observed_descriptions: Optional[Dict[Column, str]] = None) -> "ContextBuilder":
        self._observed_variables_descriptions = observed_descriptions
        return self

    def latent_variables(self, latents: Optional[Dict[Column, str]] = None) -> "ContextBuilder":
        """Set latent variables.

        Parameters
        ----------
        latents : Optional[Dict[Column, str]]
            Dictionary of latent variables along witht their datatype (if available), by default None. 
            If neither ``latents``, nor ``variables`` is set, then it is presumed 
            that ``variables`` consists of the columns of ``data`` and 
            ``latents`` is the empty set.
        """
        if self._observed_variables is not None and any(
            latent_var in self._observed_variables.keys() for latent_var in latents.keys()  # type: ignore
        ):
            raise RuntimeError(
                f"Observed variables are set already {self._observed_variables.keys()}, "
                f'which contain variables you are trying to set as "latent".'
            )
        self._latent_variables = latents
        return self

    def latent_variables_descriptions(self, latent_descriptions: Optional[Dict[Column, str]] = None) -> "ContextBuilder":
        self._latent_variables_descriptions = latent_descriptions
        return self

    def variables(
        self,
        observed: Optional[Dict[Column, str]] = None,
        latents: Optional[Dict[Column, str]] = None,
        data: Optional[pd.DataFrame] = None,
    ) -> "ContextBuilder":
        """Set variable-list information to utilize in discovery.

        Parameters
        ----------
        observed : Optional[Dict[Column, str]]
            Dictionary of observed variables along witht their datatype, by default None. 
            If neither ``latents``, nor ``variables`` is set, then it is presumed 
            that ``variables`` consists of the columns of ``data`` and 
            ``latents`` is the empty set.
        latents : Optional[Dict[Column, str]]
            Dictionary of latent variables along witht their datatype (if available), by default None. 
            If neither ``latents``, nor ``variables`` is set, then it is presumed 
            that ``variables`` consists of the columns of ``data`` and 
            ``latents`` is the empty set.
        data : Optional[pd.DataFrame]
            the data to use for variable inference.

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        self._observed_variables = observed
        self._latent_variables = latents

        if data is not None:
            (observed, latents) = self._interpolate_variables(data, observed, latents)
            self._observed_variables = observed
            self._latent_variables = latents

        if self._observed_variables is None:
            raise ValueError("Could not infer variables from data or given arguments.")

        return self

    def state_variables(self, state_variables: Dict[str, Any]) -> "ContextBuilder":
        """Set the state variables to use in discovery.

        Parameters
        ----------
        state_variables : Dict[str, Any]
            The state variables to use in discovery.

        Returns
        -------
        self : ContextBuilder
            The builder instance
        """
        self._state_variables = state_variables
        return self

    def state_variable(self, name: str, var: Any) -> "ContextBuilder":
        """Add a state variable.

        Called by an algorithm to persist data objects that
        are used in intermediate steps.

        Parameters
        ----------
        name : str
            The name of the state variable.
        var : any
            Any state variable.
        """
        self._state_variables[name] = var
        return self

    def build(self) -> Context:
        """Build the Context object.

        Returns
        -------
        context : Context
            The populated Context object.
        """
        if self._observed_variables is None:
            raise ValueError("Could not infer variables from data or given arguments.")

        empty_graph = self._empty_graph_func(self._observed_variables.keys())
        return Context(
            init_graph=self._interpolate_graph(self._observed_variables.keys()),
            included_edges=self._included_edges or empty_graph(),
            excluded_edges=self._excluded_edges or empty_graph(),
            observed_variables=self._observed_variables,
            observed_variables_descriptions=self._observed_variables_descriptions,
            latent_variables=self._latent_variables,
            latent_variables_descriptions=self._latent_variables_descriptions,
            state_variables=self._state_variables,
        )

    def _interpolate_variables(
        self,
        data: pd.DataFrame,
        observed: Optional[Dict[Column, str]] = None,
        latents: Optional[Dict[Column, str]] = None,
    ) -> Tuple[Dict[Column, str], Dict[Column, str]]:
        # initialize and parse the set of variables, latents and others
        
        columns : Dict[Column, str] = {}
        for column in df.columns:
            columns[column] = str(df.dtypes[column])

        # if both observed and latents are set, then they must include all columns in data
        if observed is not None and latents is not None:
            # Check if observed and latents together include all columns in data
            if set(columns.keys()) - set(observed.keys()) != set(latents.keys()):
                # If observed and latents are both set, they must include all columns in data
                raise ValueError("If observed and latents are both set, then they must include all columns in data.")
        elif observed is None and latents is not None:
            # If observed is not set but latents is set
            for key, value in columns.items():
                if key not in latents.keys():
                    observed[key] = value
        elif latents is None and observed is not None:
            # If latents is not set but observed is set
            for key, value in columns.items():
                if key not in observed.keys():
                    latents[key] = value
        elif observed is None and latents is None:
            # If neither observed nor latents is set
            # Assume that all columns are observed and none are latent
            observed = columns
            latents : Dict[Column, str] = {}

        return (observed, latents)

    def _interpolate_graph(self, graph_variables) -> nx.Graph:
        if self._observed_variables is None:
            raise ValueError("Must set variables() before building Context.")

        complete_graph = lambda: nx.complete_graph(graph_variables, create_using=nx.Graph)
        has_all_variables = lambda g: set(g.nodes).issuperset(set(self._observed_variables))

        # initialize the starting graph
        if self._init_graph is None:
            return complete_graph()
        else:
            if not has_all_variables(self._init_graph):
                raise ValueError(
                    f"The nodes within the initial graph, {self._init_graph.nodes}, "
                    f"do not match the nodes in the passed in data, {self._observed_variables}."
                )
            return self._init_graph

    def _empty_graph_func(self, graph_variables) -> Callable:
        empty_graph = lambda: nx.empty_graph(graph_variables, create_using=nx.Graph)
        return empty_graph


def make_context(context: Optional[Context] = None, create_using=ContextBuilder) -> ContextBuilder:
    """Create a new ContextBuilder instance.

    Returns
    -------
    result : ContextBuilder
        The new ContextBuilder instance

    Examples
    --------
    This creates a context object denoting that there are three observed
    variables, ``(1, 2, 3)``.
    >>> context_builder = make_context()
    >>> context = context_builder.variables([1, 2, 3]).build()

    Notes
    -----
    :class:`~.context.Context` objects are dataclasses that creates a dictionary-like access
    to causal context metadata. Copying relevant information from a Context
    object into a `ContextBuilder` is all supported with the exception of
    state variables. State variables are not copied over. To set state variables
    again, one must build the Context and then call
    :py:meth:`~.context.Context.state_variable`.
    """
    result = create_using()
    if context is not None:
        # we create a copy of the ContextBuilder with the current values
        # in the context
        ctx_params = context.get_params()
        for param, value in ctx_params.items():
            if getattr(result, param, None) is not None:
                getattr(result, param)(value)

    return result
