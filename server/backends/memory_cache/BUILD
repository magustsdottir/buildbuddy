load("@io_bazel_rules_go//go:def.bzl", "go_library")

go_library(
    name = "go_default_library",
    srcs = ["memory_cache.go"],
    importpath = "github.com/buildbuddy-io/buildbuddy/server/backends/memory_cache",
    visibility = ["//visibility:public"],
    deps = [
        "//proto:remote_execution_go_proto",
        "//server/interfaces:go_default_library",
        "//server/remote_cache/digest:go_default_library",
        "//server/util/perms:go_default_library",
        "//server/util/status:go_default_library",
    ],
)
