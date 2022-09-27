Search.setIndex({"docnames": ["api", "auto_examples/plot_pc_alg", "generated/dodiscover.Context", "generated/dodiscover.EquivalenceClass", "generated/dodiscover.Graph", "generated/dodiscover.ci.BaseConditionalIndependenceTest", "generated/dodiscover.ci.ClassifierCITest", "generated/dodiscover.ci.FisherZCITest", "generated/dodiscover.ci.GSquareCITest", "generated/dodiscover.ci.KernelCITest", "generated/dodiscover.ci.Oracle", "generated/dodiscover.constraint.LearnSemiMarkovianSkeleton", "generated/dodiscover.constraint.LearnSkeleton", "generated/dodiscover.constraint.PC", "generated/dodiscover.constraint.SkeletonMethods", "generated/dodiscover.metrics.confusion_matrix_networks", "index", "installation", "tutorials", "use", "whats_new", "whats_new/_contributors", "whats_new/v0.1"], "filenames": ["api.rst", "auto_examples/plot_pc_alg.rst", "generated/dodiscover.Context.rst", "generated/dodiscover.EquivalenceClass.rst", "generated/dodiscover.Graph.rst", "generated/dodiscover.ci.BaseConditionalIndependenceTest.rst", "generated/dodiscover.ci.ClassifierCITest.rst", "generated/dodiscover.ci.FisherZCITest.rst", "generated/dodiscover.ci.GSquareCITest.rst", "generated/dodiscover.ci.KernelCITest.rst", "generated/dodiscover.ci.Oracle.rst", "generated/dodiscover.constraint.LearnSemiMarkovianSkeleton.rst", "generated/dodiscover.constraint.LearnSkeleton.rst", "generated/dodiscover.constraint.PC.rst", "generated/dodiscover.constraint.SkeletonMethods.rst", "generated/dodiscover.metrics.confusion_matrix_networks.rst", "index.rst", "installation.md", "tutorials.rst", "use.rst", "whats_new.rst", "whats_new/_contributors.rst", "whats_new/v0.1.rst"], "titles": ["API", "PC algorithm for causal discovery from observational data without latent confounders", "dodiscover.Context", "dodiscover.EquivalenceClass", "dodiscover.Graph", "dodiscover.ci.BaseConditionalIndependenceTest", "dodiscover.ci.ClassifierCITest", "dodiscover.ci.FisherZCITest", "dodiscover.ci.GSquareCITest", "dodiscover.ci.KernelCITest", "dodiscover.ci.Oracle", "dodiscover.constraint.LearnSemiMarkovianSkeleton", "dodiscover.constraint.LearnSkeleton", "dodiscover.constraint.PC", "dodiscover.constraint.SkeletonMethods", "dodiscover.metrics.confusion_matrix_networks", "<strong>dodiscover</strong>", "Installation", "Tutorial", "Using dodiscover", "Release History", "&lt;no title&gt;", "What\u2019s new?"], "terms": {"dodiscov": [0, 1, 17, 20, 22], "librari": [0, 20], "python": [0, 1, 16, 17, 19], "thi": [0, 1, 2, 5, 6, 10, 11, 12, 13, 15, 16, 18, 20], "i": [0, 1, 2, 5, 10, 11, 12, 13, 14, 15, 16, 17], "applic": 0, "program": 0, "interfac": [0, 5], "refer": [0, 10, 11, 12, 13], "class": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "camelcas": 0, "name": [0, 2, 3, 12, 13], "function": [0, 5, 6, 11, 12, 13, 15], "underscore_cas": 0, "group": 0, "themat": 0, "analysi": 0, "stage": 0, "among": [0, 12], "variabl": [0, 1, 2, 10, 11, 12, 13], "core": 0, "part": 0, "mani": 0, "infer": [0, 10, 13, 16], "procedur": 0, "rather": 0, "than": [0, 1, 12], "just": [0, 1, 17], "data": [0, 2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 16, 19, 22], "case": [0, 1], "ha": [0, 1, 3, 4, 5, 22], "addit": [0, 13], "form": [0, 1], "apriori": [0, 1, 2], "knowledg": [0, 2, 11, 13], "dataset": [0, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13], "from": [0, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 17, 19, 22], "differ": [0, 11, 12, 13], "environ": 0, "all": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16, 19, 20], "pass": [0, 1, 10, 13], "object": [0, 1, 2, 11, 12, 13], "see": [0, 1, 11, 12, 13, 16], "doc": [0, 22], "more": [0, 1, 11, 12, 13, 16], "inform": [0, 11], "click": 1, "here": [1, 19, 22], "download": [1, 19], "full": [1, 13], "exampl": [1, 11, 14, 16], "code": [1, 19], "we": [1, 11, 12, 16, 22], "model": [1, 10, 11, 12], "scm": 1, "demonstr": [1, 19], "how": [1, 11, 12, 16, 18, 19], "us": [1, 6, 11, 12, 13, 15, 16, 22], "The": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "work": [1, 4], "when": [1, 2, 12, 20], "ar": [1, 2, 3, 4, 5, 10, 11, 12, 13, 15, 20], "unobserv": [1, 2], "That": 1, "mean": [1, 11, 12], "ani": [1, 2, 3, 4, 5, 11, 12, 13, 15], "set": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22], "common": 1, "caus": 1, "In": [1, 22], "other": [1, 2, 11, 12], "word": 1, "exogen": 1, "assum": [1, 13], "author": 1, "adam": [1, 22], "li": [1, 22], "adam2392": 1, "gmail": 1, "com": [1, 17], "licens": 1, "bsd": 1, "3": [1, 6, 12, 13, 17], "claus": 1, "import": 1, "numpi": 1, "np": [1, 15], "networkx": [1, 3, 4, 13, 16, 22], "nx": [1, 2, 10, 12, 13], "scipi": 1, "stat": [1, 7, 8, 9], "pywhy_graph": 1, "viz": 1, "draw": 1, "ci": [1, 11, 12, 22], "gsquarecitest": 1, "oracl": 1, "panda": [1, 13], "pd": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22], "dowhi": 1, "gcm": 1, "util": 1, "gener": [1, 6, 12, 19], "set_random_se": 1, "first": [1, 11, 17], "start": [1, 2], "induc": 1, "graph": [1, 2, 3, 10, 11, 12, 13, 15, 16, 22], "which": [1, 5, 11, 12, 13, 14, 15], "can": [1, 11, 12, 13, 14], "visual": [1, 11], "due": 1, "markov": [1, 10], "assumpt": [1, 2, 11, 12], "d": [1, 10, 11, 22], "separ": [1, 10, 11, 12, 13, 22], "examin": 1, "condition": [1, 6], "random": 1, "seed": 1, "make": 1, "reproduc": 1, "12345": 1, "rng": 1, "randomst": 1, "mycustommodel": 1, "predictionmodel": 1, "def": 1, "__init__": 1, "self": 1, "coeffici": 1, "fit": [1, 11, 12, 13], "x": [1, 11, 12, 13], "y": [1, 11, 12, 13], "noth": 1, "sinc": [1, 22], "know": [1, 11], "ground": [1, 10], "truth": [1, 10], "predict": [1, 10, 11, 13, 15], "return": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "clone": [1, 17], "don": 1, "t": 1, "realli": 1, "need": [1, 13, 19], "actual": 1, "1234": 1, "construct": 1, "result": [1, 11], "z": [1, 11, 12, 13], "w": 1, "g": 1, "digraph": [1, 2, 10], "causal_model": 1, "probabilisticcausalmodel": 1, "set_causal_mechan": 1, "scipydistribut": 1, "binom": 1, "p": [1, 7, 8, 9, 11, 12], "0": [1, 6, 10, 11, 12, 13, 20], "5": 1, "n": [1, 11, 12], "1": [1, 10, 11, 12, 13, 20], "9": [1, 10, 11, 13], "additivenoisemodel": 1, "prediction_model": 1, "noise_model": 1, "8": [1, 17], "would": [1, 14], "paramet": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "do": [1, 13, 14], "anyth": 1, "method": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 22], "onli": [1, 11, 12, 13, 15], "ensur": 1, "each": [1, 6, 11, 12, 13], "fcm": 1, "correct": 1, "local": [1, 13], "hash": 1, "e": [1, 11, 12, 17], "get": [1, 2], "an": [1, 2, 3, 4, 10, 11, 12, 13, 15], "inconsist": 1, "error": 1, "modifi": 1, "afterward": 1, "updat": 1, "have": [1, 3, 4, 13], "empti": [1, 2, 11, 12], "small": 1, "workaround": 1, "pre": 1, "datafram": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13], "column": [1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 15], "sampl": [1, 2, 6, 13], "draw_sampl": 1, "num_sampl": 1, "500": 1, "print": 1, "head": 1, "seri": 1, "col": 1, "uniqu": 1, "4": 1, "00": 1, "": [1, 11, 13, 15, 16, 20], "mechan": 1, "node": [1, 3, 4, 10, 11, 12, 13], "100": 1, "1793": 1, "97it": 1, "2": [1, 10, 11, 12, 13, 15], "row": [1, 2, 13, 15], "dtype": [1, 15], "graphviz": 1, "0x7f6a91f8aeb0": 1, "To": [1, 11, 16, 17, 19], "constraint": [1, 5, 22], "base": [1, 5, 6, 13, 22], "wai": [1, 11, 12], "There": [1, 11, 12], "variou": [1, 11, 12], "evalu": 1, "If": [1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 15], "appli": [1, 13], "real": 1, "want": 1, "best": 1, "suit": 1, "note": [1, 2, 11, 12, 13, 14, 15, 20], "becaus": [1, 14], "finit": 1, "size": [1, 11, 12, 13], "bound": 1, "incorrect": 1, "orient": [1, 3, 11, 13], "edg": [1, 2, 3, 4, 11, 12, 13, 15], "interest": 1, "ideal": 1, "imbu": 1, "queri": [1, 10], "statement": [1, 10], "help": 1, "one": [1, 11, 12, 13, 14], "determin": [1, 13], "what": [1, 13, 20], "ci_estim": [1, 11, 12, 13], "data_typ": [1, 8], "discret": 1, "pywhi": [1, 16, 17], "introduc": 1, "should": [1, 2, 5, 6, 7, 8, 9, 13], "departur": 1, "where": [1, 6, 12, 13], "user": 1, "provid": [1, 11], "primari": 1, "input": [1, 11], "problem": [1, 6], "approach": [1, 11], "encourag": [1, 16], "novic": 1, "philosoph": 1, "stone": 1, "convert": [1, 3, 4, 5, 6, 13, 15], "relationship": 1, "With": 1, "mindset": 1, "tend": 1, "surrend": 1, "task": 1, "domain": [1, 2], "specif": [1, 3, 4, 5, 11, 12, 13, 16], "enabl": [1, 5], "identifi": 1, "contrast": 1, "kei": [1, 12, 13], "strength": 1, "guid": 1, "specifi": 1, "up": 1, "front": 1, "dag": [1, 13, 16], "befor": [1, 11, 12], "ad": 1, "address": 1, "given": [1, 6, 10, 11, 12, 13, 15], "those": [1, 15], "sens": [1, 13], "hous": 1, "both": [1, 2], "relev": [1, 16], "mai": [1, 15], "downstream": 1, "altern": [1, 12], "could": 1, "sai": 1, "fix": [1, 13, 20, 21, 22], "necessarili": 1, "pure": 1, "cpdag": [1, 13], "therefor": [1, 11], "caution": 1, "thei": [1, 10, 12, 13], "leverag": 1, "id": 1, "estim": [1, 13], "block": 1, "included_edg": [1, 2], "now": [1, 11], "readi": 1, "show": [1, 18], "output": 1, "scenario": 1, "infinit": [1, 12], "amount": 1, "complet": [1, 11, 12, 13, 14], "partial": [1, 16], "direct": [1, 2, 3, 11, 16], "acycl": [1, 11, 16], "equival": [1, 3, 13], "encod": [1, 13], "depend": [1, 11, 12, 13], "were": [1, 12], "graph_": [1, 13], "dot_graph": 1, "render": 1, "outfil": 1, "oracle_cpdag": 1, "png": 1, "view": 1, "true": [1, 6, 9, 11, 12, 13, 14, 15], "perform": [1, 2], "hypothesi": [1, 12], "presenc": 1, "nois": 1, "alwai": 1, "possibl": [1, 11, 12, 13], "mistak": 1, "fail": 1, "find": 1, "between": [1, 3, 4, 10, 11, 13], "also": [1, 11, 16], "correspond": 1, "collid": [1, 11, 13], "illustr": 1, "implicit": 1, "type": [1, 3, 4, 6, 15], "ii": 1, "ci_cpdag": 1, "home": 1, "circleci": 1, "project": [1, 17, 22], "g_test": 1, "py": [1, 17], "200": 1, "runtimewarn": 1, "divid": 1, "zero": 1, "encount": [1, 12], "log": 1, "log_tlog": 1, "tlog": 1, "201": 1, "invalid": 1, "valu": [1, 7, 8, 9, 11, 12, 13, 14], "multipli": 1, "g2": 1, "nansum": 1, "contingency_tbl": 1, "total": 1, "time": 1, "script": 1, "minut": 1, "473": 1, "second": 1, "sourc": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19], "plot_pc_alg": 1, "jupyt": [1, 19], "notebook": [1, 19], "ipynb": 1, "galleri": [1, 19], "sphinx": [1, 19], "option": [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "none": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "latent": [2, 5, 8, 10, 11, 19, 22], "init_graph": 2, "union": [2, 5, 6, 7, 8, 9, 10, 11, 12, 13], "excluded_edg": 2, "state_vari": 2, "dict": [2, 3, 11, 12, 13], "str": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "A": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "consist": [2, 10, 12], "observ": [2, 5, 8, 10, 13, 19, 22], "default": [2, 5, 6, 7, 8, 9, 11, 12, 13, 15], "neither": 2, "nor": 2, "presum": 2, "includ": [2, 22], "without": [2, 5, 8, 10, 19], "exclud": [2, 3], "rais": [2, 13], "valueerror": [2, 13], "contain": [2, 5, 6, 7, 8, 9, 12, 14], "structur": [2, 11, 12, 13, 15, 16, 22], "store": [2, 12], "prior": 2, "alongsid": 2, "conjunct": [2, 11, 12], "discoveri": [2, 5, 8, 10, 13, 19], "algorithm": [2, 4, 5, 8, 10, 11, 12, 13, 16, 19, 22], "explicit": 2, "support": [2, 17], "yet": 2, "attribut": [2, 3, 4, 12, 13], "add_state_vari": 2, "var": 2, "add": [2, 3, 4, 17], "state": 2, "call": 2, "persist": 2, "intermedi": 2, "step": 2, "copi": 2, "creat": 2, "deep": 2, "necessari": [2, 11], "get_state_vari": 2, "state_var": 2, "pc": [2, 5, 8, 10, 12, 19, 22], "causal": [2, 5, 8, 10, 11, 12, 13, 15, 16, 19, 22], "confound": [2, 5, 8, 10, 13, 19, 22], "arg": [3, 4], "kwarg": [3, 4], "protocol": [3, 4], "directed_edge_nam": 3, "excluded_tripl": 3, "tripl": 3, "iter": [3, 4, 12, 13], "over": [3, 4, 13, 15], "undirected_edge_nam": 3, "undirect": [3, 4, 12, 13, 15], "add_nod": [3, 4], "node_for_ad": [3, 4], "attr": [3, 4], "properti": [3, 4, 10], "tupl": [3, 4, 5, 6, 7, 8, 9, 11, 12, 13], "frozenset": 3, "has_edg": [3, 4], "u": [3, 4], "v": [3, 4], "edge_typ": [3, 4], "bool": [3, 4, 6, 9, 11, 12, 13], "check": [3, 4, 10, 11, 12, 14], "mark_unfaithful_tripl": 3, "v_i": 3, "v_j": 3, "mark": 3, "unfaith": 3, "put": 3, "neighbor": [3, 4, 11, 12, 13], "connect": [3, 4], "orient_uncertain_edg": 3, "uncertain": 3, "predecessor": 3, "point": 3, "remove_edges_from": [3, 4], "remov": [3, 4, 12], "remove_nod": [3, 4], "successor": 3, "to_undirect": [3, 4], "fulli": [3, 4], "two": [3, 4, 11, 12, 13], "abstract": [5, 6, 7, 8, 9], "condit": [5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 22], "independ": [5, 6, 7, 8, 9, 10, 11, 12, 13, 22], "test": [5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 22], "expect": 5, "veri": 5, "lightweight": 5, "anyon": 5, "api": [5, 10, 16, 20, 21, 22], "df": [5, 6, 7, 8, 9, 10], "x_var": [5, 6, 7, 8, 9, 10, 11, 12], "int": [5, 6, 7, 8, 9, 10, 11, 12, 13], "float": [5, 6, 7, 8, 9, 10, 11, 12, 13], "y_var": [5, 6, 7, 8, 9, 10, 11, 12], "z_covari": [5, 6, 7, 8, 9, 10], "run": [5, 6, 7, 8, 9, 11, 12, 17], "standard": [5, 6, 7, 8, 9], "statist": [5, 6, 7, 8, 9, 10, 11, 12, 13], "pvalu": [5, 6, 7, 8, 9, 10, 11, 12, 13], "clf": 6, "sklearn": [6, 15], "baseestim": 6, "skorchmodel": 6, "metric": [6, 22], "callabl": [6, 13], "accuracy_scor": 6, "bootstrap": 6, "fals": [6, 11, 12], "n_iter": 6, "20": [6, 22], "correct_bia": 6, "threshold": [6, 9], "03": 6, "test_siz": 6, "random_st": 6, "generate_train_test_data": 6, "train": 6, "ccit": [6, 22], "take": [6, 15], "binari": [6, 8], "classif": [6, 22], "ndarrai": [6, 15], "x_train": 6, "y_train": 6, "x_test": 6, "y_test": 6, "compris": 6, "joint": 6, "distribut": [6, 13], "correlation_matrix": 7, "level": [8, 11, 12, 13], "list": [8, 11, 12, 13, 15, 22], "kernel_x": 9, "rbf": 9, "kernel_i": 9, "kernel_z": 9, "null_siz": 9, "1000": [9, 13], "approx_with_gamma": 9, "kwidth_x": 9, "kwidth_i": 9, "kwidth_z": 9, "1e": 9, "05": [9, 11, 12, 13], "n_job": 9, "unit": 10, "intuit": 10, "known": [10, 13, 16], "shape": [10, 15], "n_sampl": 10, "n_variabl": 10, "matrix": [10, 15, 22], "argument": [10, 11, 12, 13], "judea": 10, "pearl": 10, "reason": 10, "cambridg": 10, "univers": 10, "press": [10, 11, 13], "usa": 10, "2nd": 10, "edit": 10, "2009": 10, "isbn": [10, 11, 13], "052189560x": 10, "peter": [10, 11, 13], "spirt": [10, 11, 13], "clark": [10, 11, 13], "glymour": [10, 11, 13], "richard": [10, 11, 13], "schein": [10, 11, 13], "causat": [10, 11, 13], "search": [10, 11, 13], "volum": [10, 11, 13], "81": [10, 11, 13], "mit": [10, 11, 13], "01": [10, 11, 13], "1993": [10, 11, 13], "978": [10, 11, 13], "4612": [10, 11, 13], "7650": [10, 11, 13], "doi": [10, 11, 13], "10": [10, 11, 13], "1007": [10, 11, 13], "2748": [10, 11, 13], "baseconditionalindependencetest": [11, 12, 13], "sep_set": [11, 12, 13], "alpha": [11, 12, 13], "min_cond_set_s": [11, 12, 13], "max_cond_set_s": [11, 12, 13], "max_combin": [11, 12, 13], "skeleton_method": [11, 12, 13], "skeletonmethod": [11, 12, 13], "keep_sort": [11, 12], "max_path_length": 11, "ci_estimator_kwarg": [11, 12, 13], "learn": [11, 12, 13, 14, 16, 19, 22], "skeleton": [11, 12, 13, 14, 22], "semi": 11, "markovian": [11, 12], "proce": [11, 12], "candid": 11, "possibli": 11, "lie": 11, "path": [11, 12], "requir": [11, 12], "pag": [11, 16], "comput": [11, 12, 13, 15], "detail": [11, 12, 13], "dictionari": [11, 12, 13], "map": [11, 12], "initi": [11, 12, 13], "signific": [11, 12, 13], "minimum": [11, 12, 13], "number": [11, 12, 13], "maximum": [11, 12, 13], "limit": [11, 12, 13], "spent": [11, 12, 13], "By": [11, 12, 13], "everi": [11, 12], "most": [11, 12], "increment": [11, 12], "For": [11, 12, 14, 16], "control": [11, 12, 13], "strongest": [11, 12], "must": [11, 12, 13, 15], "pds_path": 11, "whether": [11, 12, 13], "keep": [11, 12], "consid": [11, 12], "sort": [11, 12, 13, 15], "order": [11, 12, 15], "exist": [11, 12], "its": [11, 12], "weakest": [11, 12], "largest": [11, 12], "lowest": [11, 12], "length": 11, "discrimin": 11, "unlimit": 11, "keyword": [11, 12, 13], "superset": 11, "certain": [11, 13], "respect": 11, "enumer": 11, "figur": 11, "16": [11, 22], "17": 11, "18": 11, "rfci": [11, 12], "paper": [11, 12], "valid": [11, 12], "under": [11, 12, 22], "defin": [11, 12], "select": [11, 12, 15], "definit": 11, "doe": [11, 15], "reli": 11, "restrict": [11, 12], "variant": [11, 12], "diego": 11, "colombo": 11, "marlo": 11, "h": 11, "maathui": 11, "marku": 11, "kalisch": 11, "thoma": 11, "richardson": 11, "high": 11, "dimension": 11, "annal": 11, "40": 11, "294": 11, "321": 11, "2012": 11, "url": 11, "http": [11, 17], "org": [11, 17], "1214": 11, "11": 11, "aos940": 11, "evaluate_edg": [11, 12, 13], "test_stat": [11, 12, 13], "context": [11, 12, 13], "nbr": [12, 13], "neighbors_path": [12, 13], "while": 12, "track": 12, "ones": 12, "rememb": 12, "null": 12, "h_0": 12, "perp": 12, "henc": 12, "link": [12, 20], "overview": 12, "four": 12, "loop": 12, "through": [12, 13, 16], "size_cond_set": 12, "wherea": 12, "hyperparamet": 12, "adjac": [12, 13, 15], "combin": 12, "cond_set": 12, "allow": [12, 14], "fourth": 12, "At": 12, "outer": 12, "deem": 12, "furthermor": 12, "still": [12, 13], "stop": 12, "pair": [12, 13], "less": 12, "reach": 12, "exhaust": [12, 13], "essenti": 12, "sg": 12, "tradit": 12, "adj_graph_": 12, "discov": [12, 13], "smallest": 12, "seen": 12, "some": [12, 19], "sep_set_": 12, "apply_orient": 13, "max_it": 13, "suffici": 13, "compar": [13, 15, 22], "constrain": 13, "tri": 13, "chosen": 13, "parent": 13, "lexograph": 13, "ith": 13, "pa": 13, "rule": 13, "per": 13, "meek": 13, "r0": 13, "arrowhead": 13, "christoph": 13, "explan": 13, "background": 13, "proceed": 13, "eleventh": 13, "confer": 13, "uncertainti": 13, "artifici": 13, "intellig": 13, "montreal": 13, "qu": 13, "02": 13, "2013": 13, "equivalenceclass": 13, "separating_sets_": 13, "nest": 13, "being": 13, "convert_skeleton_graph": 13, "represent": 13, "either": 13, "constitut": 13, "endogen": 13, "runtimeerror": 13, "same": [13, 15], "impos": 13, "constructor": 13, "learn_skeleton": 13, "pairwis": 13, "via": [13, 17], "skel_graph": 13, "match": 13, "orient_edg": 13, "These": 13, "determinist": 13, "logic": 13, "character": 13, "present": 13, "rest": 13, "orient_unshielded_tripl": 13, "avail": [14, 17], "metaclass": 14, "true_graph": 15, "pred_graph": 15, "label": 15, "scalartyp": 15, "normal": 15, "confus": [15, 22], "symmetr": 15, "instanc": 15, "array_lik": 15, "n_class": 15, "index": [15, 16], "reorder": 15, "subset": 15, "appear": 15, "least": 15, "onc": 15, "y_true": 15, "y_pred": 15, "pred": 15, "popul": 15, "cm": 15, "confusion_matrix": 15, "consider": 15, "direction": 15, "packag": 16, "repres": 16, "mix": 16, "admg": 16, "ancestr": 16, "build": 16, "top": 16, "mixededgegraph": 16, "maintain": 16, "well": 16, "effici": [16, 20, 21, 22], "you": [16, 19], "your": 16, "research": 16, "pull": 16, "request": 16, "our": 16, "walk": 16, "instal": 16, "tutori": 16, "releas": 16, "histori": 16, "develop": [16, 22], "about": 16, "who": [16, 22], "contribut": [16, 22], "codebas": 16, "contributor": 16, "page": [16, 20], "modul": 16, "pip": 17, "poetri": 17, "pypi": 17, "recommend": 17, "repositori": [17, 22], "github": 17, "git": 17, "why": 17, "cd": 17, "Then": 17, "abl": 19, "effect": 19, "look": 19, "everyth": 19, "auto_examples_python": 19, "zip": 19, "auto_examples_jupyt": 19, "major": [20, 21, 22], "featur": [20, 21, 22], "enhanc": [20, 21, 22], "chang": [20, 21, 22], "tip": 20, "subscrib": 20, "io": 20, "notifi": 20, "new": 20, "version": 20, "implement": 22, "continu": 22, "integr": 22, "15": 22, "submodul": 22, "learnskeleton": 22, "like": 22, "confusion_matrix_network": 22, "48": 22, "classifiercitest": 22, "28": 22, "30": 22, "potenti": 22, "learnsemimarkovianskeleton": 22, "50": 22, "thank": 22, "everyon": 22, "mainten": 22, "improv": 22, "incept": 22}, "objects": {"": [[0, 0, 0, "-", "dodiscover"]], "dodiscover": [[2, 1, 1, "", "Context"], [3, 1, 1, "", "EquivalenceClass"], [4, 1, 1, "", "Graph"]], "dodiscover.Context": [[2, 2, 1, "", "add_state_variable"], [2, 2, 1, "", "copy"], [2, 2, 1, "", "get_state_variable"]], "dodiscover.EquivalenceClass": [[3, 2, 1, "", "add_node"], [3, 3, 1, "", "directed_edge_name"], [3, 2, 1, "", "edges"], [3, 3, 1, "", "excluded_triples"], [3, 2, 1, "", "has_edge"], [3, 2, 1, "", "mark_unfaithful_triple"], [3, 2, 1, "", "neighbors"], [3, 3, 1, "", "nodes"], [3, 2, 1, "", "orient_uncertain_edge"], [3, 2, 1, "", "predecessors"], [3, 2, 1, "", "remove_edges_from"], [3, 2, 1, "", "remove_node"], [3, 2, 1, "", "successors"], [3, 2, 1, "", "to_undirected"], [3, 3, 1, "", "undirected_edge_name"]], "dodiscover.Graph": [[4, 2, 1, "", "add_node"], [4, 2, 1, "", "edges"], [4, 2, 1, "", "has_edge"], [4, 2, 1, "", "neighbors"], [4, 3, 1, "", "nodes"], [4, 2, 1, "", "remove_edges_from"], [4, 2, 1, "", "remove_node"], [4, 2, 1, "", "to_undirected"]], "dodiscover.ci": [[5, 1, 1, "", "BaseConditionalIndependenceTest"], [6, 1, 1, "", "ClassifierCITest"], [7, 1, 1, "", "FisherZCITest"], [8, 1, 1, "", "GSquareCITest"], [9, 1, 1, "", "KernelCITest"], [10, 1, 1, "", "Oracle"]], "dodiscover.ci.BaseConditionalIndependenceTest": [[5, 2, 1, "", "test"]], "dodiscover.ci.ClassifierCITest": [[6, 2, 1, "", "generate_train_test_data"], [6, 2, 1, "", "test"]], "dodiscover.ci.FisherZCITest": [[7, 2, 1, "", "test"]], "dodiscover.ci.GSquareCITest": [[8, 2, 1, "", "test"]], "dodiscover.ci.KernelCITest": [[9, 2, 1, "", "test"]], "dodiscover.ci.Oracle": [[10, 2, 1, "", "test"]], "dodiscover.constraint": [[11, 1, 1, "", "LearnSemiMarkovianSkeleton"], [12, 1, 1, "", "LearnSkeleton"], [13, 1, 1, "", "PC"], [14, 1, 1, "", "SkeletonMethods"]], "dodiscover.constraint.LearnSemiMarkovianSkeleton": [[11, 2, 1, "", "evaluate_edge"], [11, 2, 1, "", "fit"]], "dodiscover.constraint.LearnSkeleton": [[12, 2, 1, "", "evaluate_edge"], [12, 2, 1, "", "fit"]], "dodiscover.constraint.PC": [[13, 2, 1, "", "convert_skeleton_graph"], [13, 2, 1, "", "evaluate_edge"], [13, 2, 1, "", "fit"], [13, 2, 1, "", "learn_skeleton"], [13, 2, 1, "", "orient_edges"], [13, 2, 1, "", "orient_unshielded_triples"]], "dodiscover.metrics": [[15, 4, 1, "", "confusion_matrix_networks"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:property", "4": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "property", "Python property"], "4": ["py", "function", "Python function"]}, "titleterms": {"api": 0, "condit": [0, 1], "independ": [0, 1], "test": [0, 1], "graph": [0, 4], "protocol": 0, "context": [0, 1, 2], "causal": [0, 1], "discoveri": [0, 1], "constraint": [0, 11, 12, 13, 14], "base": 0, "structur": [0, 1], "learn": [0, 1], "compar": 0, "algorithm": [0, 1], "pc": [1, 13], "from": 1, "observ": 1, "data": 1, "without": 1, "latent": 1, "confound": 1, "simul": 1, "some": 1, "instanti": 1, "defin": 1, "run": 1, "dodiscov": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19], "exampl": [2, 5, 8, 10, 19], "us": [2, 5, 8, 10, 18, 19], "equivalenceclass": 3, "ci": [5, 6, 7, 8, 9, 10], "baseconditionalindependencetest": 5, "classifiercitest": 6, "fisherzcitest": 7, "gsquarecitest": 8, "kernelcitest": 9, "oracl": 10, "learnsemimarkovianskeleton": 11, "learnskeleton": 12, "skeletonmethod": 14, "metric": 15, "confusion_matrix_network": 15, "content": 16, "get": 16, "start": 16, "team": 16, "indic": 16, "tabl": 16, "instal": 17, "tutori": 18, "releas": 20, "histori": 20, "what": 22, "": 22, "new": 22, "version": 22, "0": 22, "1": 22, "changelog": 22, "code": 22, "document": 22, "contributor": 22}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinxcontrib.bibtex": 9, "nbsphinx": 4, "sphinx": 57}, "alltitles": {"API": [[0, "api"]], "Conditional Independence Testing": [[0, "conditional-independence-testing"]], "Graph protocols": [[0, "graph-protocols"]], "Context for causal discovery": [[0, "context-for-causal-discovery"]], "Constraint-based structure learning": [[0, "constraint-based-structure-learning"]], "Comparing causal discovery algorithms": [[0, "comparing-causal-discovery-algorithms"]], "PC algorithm for causal discovery from observational data without latent confounders": [[1, "pc-algorithm-for-causal-discovery-from-observational-data-without-latent-confounders"]], "Simulate some data": [[1, "simulate-some-data"]], "Instantiate some conditional independence tests": [[1, "instantiate-some-conditional-independence-tests"]], "Define the context": [[1, "define-the-context"]], "Run structure learning algorithm": [[1, "run-structure-learning-algorithm"]], "dodiscover.Context": [[2, "dodiscover-context"]], "Examples using dodiscover.Context": [[2, "examples-using-dodiscover-context"]], "dodiscover.EquivalenceClass": [[3, "dodiscover-equivalenceclass"]], "dodiscover.Graph": [[4, "dodiscover-graph"]], "dodiscover.ci.BaseConditionalIndependenceTest": [[5, "dodiscover-ci-baseconditionalindependencetest"]], "Examples using dodiscover.ci.BaseConditionalIndependenceTest": [[5, "examples-using-dodiscover-ci-baseconditionalindependencetest"]], "dodiscover.ci.ClassifierCITest": [[6, "dodiscover-ci-classifiercitest"]], "dodiscover.ci.FisherZCITest": [[7, "dodiscover-ci-fisherzcitest"]], "dodiscover.ci.GSquareCITest": [[8, "dodiscover-ci-gsquarecitest"]], "Examples using dodiscover.ci.GSquareCITest": [[8, "examples-using-dodiscover-ci-gsquarecitest"]], "dodiscover.ci.KernelCITest": [[9, "dodiscover-ci-kernelcitest"]], "dodiscover.ci.Oracle": [[10, "dodiscover-ci-oracle"]], "Examples using dodiscover.ci.Oracle": [[10, "examples-using-dodiscover-ci-oracle"]], "dodiscover.constraint.LearnSemiMarkovianSkeleton": [[11, "dodiscover-constraint-learnsemimarkovianskeleton"]], "dodiscover.constraint.LearnSkeleton": [[12, "dodiscover-constraint-learnskeleton"]], "dodiscover.constraint.PC": [[13, "dodiscover-constraint-pc"]], "dodiscover.constraint.SkeletonMethods": [[14, "dodiscover-constraint-skeletonmethods"]], "dodiscover.metrics.confusion_matrix_networks": [[15, "dodiscover-metrics-confusion-matrix-networks"]], "dodiscover": [[16, "dodiscover"]], "Contents": [[16, "contents"]], "Getting started:": [[16, null]], "Team": [[16, "team"]], "Indices and tables": [[16, "indices-and-tables"]], "Installation": [[17, "installation"]], "Tutorial": [[18, "tutorial"]], "Using dodiscover": [[18, "using-dodiscover"], [19, "using-dodiscover"]], "Examples": [[19, "examples"]], "Release History": [[20, "release-history"]], "What\u2019s new?": [[22, "what-s-new"]], "Version 0.1": [[22, "version-0-1"]], "Changelog": [[22, "changelog"]], "Code and Documentation Contributors": [[22, "code-and-documentation-contributors"]]}, "indexentries": {"dodiscover": [[0, "module-dodiscover"]], "module": [[0, "module-dodiscover"]], "context (class in dodiscover)": [[2, "dodiscover.Context"]], "add_state_variable() (dodiscover.context method)": [[2, "dodiscover.Context.add_state_variable"]], "copy() (dodiscover.context method)": [[2, "dodiscover.Context.copy"]], "get_state_variable() (dodiscover.context method)": [[2, "dodiscover.Context.get_state_variable"]], "equivalenceclass (class in dodiscover)": [[3, "dodiscover.EquivalenceClass"]], "add_node() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.add_node"]], "directed_edge_name (dodiscover.equivalenceclass property)": [[3, "dodiscover.EquivalenceClass.directed_edge_name"]], "edges() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.edges"]], "excluded_triples (dodiscover.equivalenceclass property)": [[3, "dodiscover.EquivalenceClass.excluded_triples"]], "has_edge() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.has_edge"]], "mark_unfaithful_triple() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.mark_unfaithful_triple"]], "neighbors() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.neighbors"]], "nodes (dodiscover.equivalenceclass property)": [[3, "dodiscover.EquivalenceClass.nodes"]], "orient_uncertain_edge() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.orient_uncertain_edge"]], "predecessors() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.predecessors"]], "remove_edges_from() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.remove_edges_from"]], "remove_node() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.remove_node"]], "successors() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.successors"]], "to_undirected() (dodiscover.equivalenceclass method)": [[3, "dodiscover.EquivalenceClass.to_undirected"]], "undirected_edge_name (dodiscover.equivalenceclass property)": [[3, "dodiscover.EquivalenceClass.undirected_edge_name"]], "graph (class in dodiscover)": [[4, "dodiscover.Graph"]], "add_node() (dodiscover.graph method)": [[4, "dodiscover.Graph.add_node"]], "edges() (dodiscover.graph method)": [[4, "dodiscover.Graph.edges"]], "has_edge() (dodiscover.graph method)": [[4, "dodiscover.Graph.has_edge"]], "neighbors() (dodiscover.graph method)": [[4, "dodiscover.Graph.neighbors"]], "nodes (dodiscover.graph property)": [[4, "dodiscover.Graph.nodes"]], "remove_edges_from() (dodiscover.graph method)": [[4, "dodiscover.Graph.remove_edges_from"]], "remove_node() (dodiscover.graph method)": [[4, "dodiscover.Graph.remove_node"]], "to_undirected() (dodiscover.graph method)": [[4, "dodiscover.Graph.to_undirected"]], "baseconditionalindependencetest (class in dodiscover.ci)": [[5, "dodiscover.ci.BaseConditionalIndependenceTest"]], "test() (dodiscover.ci.baseconditionalindependencetest method)": [[5, "dodiscover.ci.BaseConditionalIndependenceTest.test"]], "classifiercitest (class in dodiscover.ci)": [[6, "dodiscover.ci.ClassifierCITest"]], "generate_train_test_data() (dodiscover.ci.classifiercitest method)": [[6, "dodiscover.ci.ClassifierCITest.generate_train_test_data"]], "test() (dodiscover.ci.classifiercitest method)": [[6, "dodiscover.ci.ClassifierCITest.test"]], "fisherzcitest (class in dodiscover.ci)": [[7, "dodiscover.ci.FisherZCITest"]], "test() (dodiscover.ci.fisherzcitest method)": [[7, "dodiscover.ci.FisherZCITest.test"]], "gsquarecitest (class in dodiscover.ci)": [[8, "dodiscover.ci.GSquareCITest"]], "test() (dodiscover.ci.gsquarecitest method)": [[8, "dodiscover.ci.GSquareCITest.test"]], "kernelcitest (class in dodiscover.ci)": [[9, "dodiscover.ci.KernelCITest"]], "test() (dodiscover.ci.kernelcitest method)": [[9, "dodiscover.ci.KernelCITest.test"]], "oracle (class in dodiscover.ci)": [[10, "dodiscover.ci.Oracle"]], "test() (dodiscover.ci.oracle method)": [[10, "dodiscover.ci.Oracle.test"]], "learnsemimarkovianskeleton (class in dodiscover.constraint)": [[11, "dodiscover.constraint.LearnSemiMarkovianSkeleton"]], "evaluate_edge() (dodiscover.constraint.learnsemimarkovianskeleton method)": [[11, "dodiscover.constraint.LearnSemiMarkovianSkeleton.evaluate_edge"]], "fit() (dodiscover.constraint.learnsemimarkovianskeleton method)": [[11, "dodiscover.constraint.LearnSemiMarkovianSkeleton.fit"]], "learnskeleton (class in dodiscover.constraint)": [[12, "dodiscover.constraint.LearnSkeleton"]], "evaluate_edge() (dodiscover.constraint.learnskeleton method)": [[12, "dodiscover.constraint.LearnSkeleton.evaluate_edge"]], "fit() (dodiscover.constraint.learnskeleton method)": [[12, "dodiscover.constraint.LearnSkeleton.fit"]], "pc (class in dodiscover.constraint)": [[13, "dodiscover.constraint.PC"]], "convert_skeleton_graph() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.convert_skeleton_graph"]], "evaluate_edge() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.evaluate_edge"]], "fit() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.fit"]], "learn_skeleton() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.learn_skeleton"]], "orient_edges() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.orient_edges"]], "orient_unshielded_triples() (dodiscover.constraint.pc method)": [[13, "dodiscover.constraint.PC.orient_unshielded_triples"]], "skeletonmethods (class in dodiscover.constraint)": [[14, "dodiscover.constraint.SkeletonMethods"]], "confusion_matrix_networks() (in module dodiscover.metrics)": [[15, "dodiscover.metrics.confusion_matrix_networks"]]}})