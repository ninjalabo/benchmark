window.BENCHMARK_DATA = {
  "lastUpdate": 1720604218264,
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
      }
    ]
  }
}