window.BENCHMARK_DATA = {
  "lastUpdate": 1720761828696,
  "repoUrl": "https://github.com/ninjalabo/tinyRuntime",
  "entries": {
    "Python Benchmark ARM": [
      {
        "commit": {
          "author": {
            "email": "haru.doyu@gmail.com",
            "name": "hd702",
            "username": "harukadoyu"
          },
          "committer": {
            "email": "haru.doyu@gmail.com",
            "name": "hd702",
            "username": "harukadoyu"
          },
          "distinct": true,
          "id": "30e5dd40393f5790f680e2c28899aad09bfe41b9",
          "message": "automate benchmarking with GitHub Actions\n\nI added a total of four benchmark tests: vanilla tinyRuntime for ARM and x86, and quantized tinyRuntime for ARM and x86. After the test, GitHub Actions uploads the times to the https://github.com/ninjalabo/benchmark/tree/gh-pages. The results are then displayed at https://ninjalabo.github.io/benchmark/dev/bench/.",
          "timestamp": "2024-07-10T12:31:09+03:00",
          "tree_id": "8702cc2fe02fcd4592e25c3c5d117fe3fdfe10a1",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/30e5dd40393f5790f680e2c28899aad09bfe41b9"
        },
        "date": 1720604217621,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 160.28292169071014,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505455368365449",
            "extra": "mean: 6.238967879120954 msec\nrounds: 91"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 154.22483381224592,
            "unit": "iter/sec",
            "range": "stddev: 0.00012873316330504122",
            "extra": "mean: 6.484040055555547 msec\nrounds: 126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroshi.doyu@ninjalabo.ai",
            "name": "Hiroshi Doyu",
            "username": "doyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c84e9416a1c6f5da221606e01bb78c124419fafd",
          "message": "Merge pull request #147 from ninjalabo/check-speed-for-every-commit\n\nautomate benchmarking with GitHub Actions",
          "timestamp": "2024-07-12T08:21:52+03:00",
          "tree_id": "8702cc2fe02fcd4592e25c3c5d117fe3fdfe10a1",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/c84e9416a1c6f5da221606e01bb78c124419fafd"
        },
        "date": 1720761828014,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 262.0760944288308,
            "unit": "iter/sec",
            "range": "stddev: 0.00015778263985537802",
            "extra": "mean: 3.8156856777776778 msec\nrounds: 90"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 237.06987058694446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008854904758260394",
            "extra": "mean: 4.218165714285712 msec\nrounds: 175"
          }
        ]
      }
    ],
    "Python Benchmark x86": [
      {
        "commit": {
          "author": {
            "email": "haru.doyu@gmail.com",
            "name": "hd702",
            "username": "harukadoyu"
          },
          "committer": {
            "email": "haru.doyu@gmail.com",
            "name": "hd702",
            "username": "harukadoyu"
          },
          "distinct": true,
          "id": "30e5dd40393f5790f680e2c28899aad09bfe41b9",
          "message": "automate benchmarking with GitHub Actions\n\nI added a total of four benchmark tests: vanilla tinyRuntime for ARM and x86, and quantized tinyRuntime for ARM and x86. After the test, GitHub Actions uploads the times to the https://github.com/ninjalabo/benchmark/tree/gh-pages. The results are then displayed at https://ninjalabo.github.io/benchmark/dev/bench/.",
          "timestamp": "2024-07-10T12:31:09+03:00",
          "tree_id": "8702cc2fe02fcd4592e25c3c5d117fe3fdfe10a1",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/30e5dd40393f5790f680e2c28899aad09bfe41b9"
        },
        "date": 1720604381882,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 73.60765681214589,
            "unit": "iter/sec",
            "range": "stddev: 0.0003828646320493887",
            "extra": "mean: 13.585543179999604 msec\nrounds: 50"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 73.52585752121047,
            "unit": "iter/sec",
            "range": "stddev: 0.0004933767332641827",
            "extra": "mean: 13.600657424655317 msec\nrounds: 73"
          }
        ]
      }
    ]
  }
}