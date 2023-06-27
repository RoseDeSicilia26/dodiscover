from typing import Dict, List, Set, Tuple, Union, Any

import networkx as nx

# Pandas DataFrame columns that are also compatible with Graph nodes
Column = Union[None, int, float, str, Tuple]

# The separating set used in constraint-based causal discovery
SeparatingSet = Dict[Column, Dict[Column, List[Set[Column]]]]

NetworkxGraph = Union[nx.Graph, nx.DiGraph]

# Frozen Set
