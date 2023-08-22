// https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
// https://www.typescriptlang.org/play?#code/PQKgUABBDMAMBsAmCBaCBlAFgSwGYBdJUUTSiAjATwgCtsBDAOwHMBnTJiACgAE6m2HRgFsApvnoBKCAGIxAE2wBXYbPoAndfUpgiM-RACKS0a3zYA9o11QAksIAOAG1FjG+CPkyjPlBz4A3UXVWS0YIC1wIAANYgEFNbQA6djx8WOibCAAxC3UIUQAPekcXLIz8P1MAY3VsB0IoSv8IACVTJScPAF4MHAIAHgBtaAAaCERxgEYAXQA+CGBgCCHJiFmiDKyFgDVsUQB3CPCAcWx8AAklcgAuCEx8fAdWG6X8VmrMJJpWJLzmYBwJBgEDAXSgCAAfWhMNhMIgAE0LEp8gBhCzyHwXYI+OF46EQUG6Zo+LBpAYAFQWvQpBUK+FEjHkrBWTEo4ySnOwjFwwQgAFUZhAAPwCiB3IYzcEgKH4uEQCmmDyo+isUyyuXwonYRx5DwkiAAbwgAFEAI5KehOcYmwr+aoeAC+EFw6gsqgA5DwSShPlaXCxTMAlOYnKwPcSqhBqqr1b0hkQlhBvawUEV7fg05o8kQyYMlIwANaMCwHRhzUZEW0Zgbmy1OAZ5-DDebjSVzCtVu2iB21i1Wxv9ZtDWYVlbzTtQas95t1gdN4ZjCbTVsrNajyem7u9ucNhdDD30D3jD3kY8QD3Vc8e+Qe1cHs8nq8n28TytSsAQzWwnIorx89AGWeDVv0JMFQCIBYsA0HxKGRfJWAsJwQzCF57keZ5XmAd5Pm+X5-kBBBEGAJhWAOYJIIgPZDggRDkPMKw0IeJ4XjeD4vh+P51ABIFiLolDGMogBZPIfFRDgnADZhTDuZjMLY3DOP+EEwSAA

type Shift<T> = T extends [any, ...infer U] ? U : []