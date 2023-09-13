cmake_minimum_required(VERSION 3.25)
project(client)

set(CMAKE_CXX_STANDARD 23)

add_executable(client main.cpp src/controller.cpp src/controller.hpp)
