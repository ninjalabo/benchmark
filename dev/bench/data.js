window.BENCHMARK_DATA = {
  "lastUpdate": 1721701198011,
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
      },
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
          "id": "464202d084bd01f480be07d3204f80a55b83e68d",
          "message": "fix compiler to load model to CPU\n\n`ninjalabo/compiler-export-models` (`prep_model.py`), which previously loaded the model on the device where it was saved, now always loads the model to the CPU. This change avoids errors when loading a GPU-saved model on a CPU-only machine. Additionally, the GitHub workflow for the compiler has been modified to be triggered only when related files are changed.",
          "timestamp": "2024-07-22T05:22:37+03:00",
          "tree_id": "9ec1f77bc24936c970e2ac4e82a9a782ba164b45",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/464202d084bd01f480be07d3204f80a55b83e68d"
        },
        "date": 1721615126186,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 255.8062685214668,
            "unit": "iter/sec",
            "range": "stddev: 0.00018635194420281597",
            "extra": "mean: 3.9092083465346428 msec\nrounds: 101"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 232.36533939519882,
            "unit": "iter/sec",
            "range": "stddev: 0.00007759781647873976",
            "extra": "mean: 4.3035678324607405 msec\nrounds: 191"
          }
        ]
      },
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
          "id": "d3e6b7bde0f4866f070c0da72a4d7593b3c97a38",
          "message": "fix compiler to load model to CPU\n\n`ninjalabo/compiler-export-models` (`prep_model.py`), which previously loaded the model on the device where it was saved, now always loads the model to the CPU. This change avoids errors when loading a GPU-saved model on a CPU-only machine. Additionally, the GitHub workflow for the compiler has been modified to be triggered only when related files are changed.",
          "timestamp": "2024-07-22T05:31:28+03:00",
          "tree_id": "9d3c6f48e5627c9d3324d6985764677b4e5954bf",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/d3e6b7bde0f4866f070c0da72a4d7593b3c97a38"
        },
        "date": 1721615700660,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 161.723491378391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005857259607015318",
            "extra": "mean: 6.183393590361337 msec\nrounds: 83"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 163.55018211038293,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565149470602391",
            "extra": "mean: 6.114331314685313 msec\nrounds: 143"
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
        "date": 1721642862097,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 261.0495635346208,
            "unit": "iter/sec",
            "range": "stddev: 0.00013817723936585216",
            "extra": "mean: 3.8306901818182064 msec\nrounds: 110"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 236.08441262188703,
            "unit": "iter/sec",
            "range": "stddev: 0.00007174890030332956",
            "extra": "mean: 4.2357730817307315 msec\nrounds: 208"
          }
        ]
      },
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
          "id": "7676a93c36aa78810d9294655e857e7e8bc33bde",
          "message": "fix compiler to load model to CPU\n\n`ninjalabo/compiler-export-models` (`prep_model.py`), which previously loaded the model on the device where it was saved, now always loads the model to the CPU. This change avoids errors when loading a GPU-saved model on a CPU-only machine. Additionally, the GitHub workflow for the compiler has been modified to be triggered only when related files are changed.",
          "timestamp": "2024-07-23T05:14:19+03:00",
          "tree_id": "9d3c6f48e5627c9d3324d6985764677b4e5954bf",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/7676a93c36aa78810d9294655e857e7e8bc33bde"
        },
        "date": 1721701063606,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 133.90899812305554,
            "unit": "iter/sec",
            "range": "stddev: 0.0014150968658895148",
            "extra": "mean: 7.467758059701492 msec\nrounds: 67"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 118.55409272977971,
            "unit": "iter/sec",
            "range": "stddev: 0.002147445947808228",
            "extra": "mean: 8.434968181818064 msec\nrounds: 55"
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
        "date": 1720762022122,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 67.66564581223287,
            "unit": "iter/sec",
            "range": "stddev: 0.0018535715236725609",
            "extra": "mean: 14.778548079995062 msec\nrounds: 50"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 70.44726891783093,
            "unit": "iter/sec",
            "range": "stddev: 0.0013766274847258396",
            "extra": "mean: 14.195014446427885 msec\nrounds: 56"
          }
        ]
      },
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
          "id": "d3e6b7bde0f4866f070c0da72a4d7593b3c97a38",
          "message": "fix compiler to load model to CPU\n\n`ninjalabo/compiler-export-models` (`prep_model.py`), which previously loaded the model on the device where it was saved, now always loads the model to the CPU. This change avoids errors when loading a GPU-saved model on a CPU-only machine. Additionally, the GitHub workflow for the compiler has been modified to be triggered only when related files are changed.",
          "timestamp": "2024-07-22T05:31:28+03:00",
          "tree_id": "9d3c6f48e5627c9d3324d6985764677b4e5954bf",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/d3e6b7bde0f4866f070c0da72a4d7593b3c97a38"
        },
        "date": 1721615893739,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 70.5704330843291,
            "unit": "iter/sec",
            "range": "stddev: 0.0013637284070581318",
            "extra": "mean: 14.17024037255144 msec\nrounds: 51"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 67.0944330956625,
            "unit": "iter/sec",
            "range": "stddev: 0.004151131441752522",
            "extra": "mean: 14.904366187492949 msec\nrounds: 48"
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
        "date": 1721643050288,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 48.64994890752004,
            "unit": "iter/sec",
            "range": "stddev: 0.0032403243773016697",
            "extra": "mean: 20.555006170734654 msec\nrounds: 41"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 54.238209721834814,
            "unit": "iter/sec",
            "range": "stddev: 0.002983694535930296",
            "extra": "mean: 18.437186720000227 msec\nrounds: 50"
          }
        ]
      },
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
          "id": "7676a93c36aa78810d9294655e857e7e8bc33bde",
          "message": "fix compiler to load model to CPU\n\n`ninjalabo/compiler-export-models` (`prep_model.py`), which previously loaded the model on the device where it was saved, now always loads the model to the CPU. This change avoids errors when loading a GPU-saved model on a CPU-only machine. Additionally, the GitHub workflow for the compiler has been modified to be triggered only when related files are changed.",
          "timestamp": "2024-07-23T05:14:19+03:00",
          "tree_id": "9d3c6f48e5627c9d3324d6985764677b4e5954bf",
          "url": "https://github.com/ninjalabo/tinyRuntime/commit/7676a93c36aa78810d9294655e857e7e8bc33bde"
        },
        "date": 1721701197870,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark.py::test_vanilla_tinyruntime",
            "value": 75.00877970271378,
            "unit": "iter/sec",
            "range": "stddev: 0.0005246928275828912",
            "extra": "mean: 13.331772679989626 msec\nrounds: 50"
          },
          {
            "name": "benchmark.py::test_quantized_tinyruntime",
            "value": 74.52803919150361,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957680454245711",
            "extra": "mean: 13.417768813566246 msec\nrounds: 59"
          }
        ]
      }
    ]
  }
}