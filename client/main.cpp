#include <iostream>

void parse_command(const std::string& command_string);


int main(int argc, char* argv[])
{
    std::cout << "--- Welcome to Dev Sync ---" << std::endl;
    std::cout << "usage: dev-sync [-v | --version] [-h | --help]"<< std::endl;
    std::cout << "       dev-sync [-s | --sync] [-c | --config] [-p | --path] [-d | --debug]"<< std::endl;

    if (argc > 0)
    {
        parse_command(argv[1]);
    }

    return 0;
}

void parse_command(const std::string& command_string)
{
    if (command_string.empty())
    {
        std::cout << "No command_string to execute" << std::endl;
        return;
    } else if (command_string == "-h" || command_string == "-help")
    {
        std::cout << "Help" << std::endl;
        return;
    } else if (command_string == "-v" || command_string == "-version")
    {
        std::cout << "Version" << std::endl;
        return;
    } else if (command_string == "-s" || command_string == "-sync")
    {
        std::cout << "Sync" << std::endl;
        return;
    } else if (command_string == "-c" || command_string == "-config")
    {
        std::cout << "Config" << std::endl;
        return;
    } else if (command_string == "-p" || command_string == "-path")
    {
        std::cout << "Path" << std::endl;
        return;
    } else if (command_string == "-d" || command_string == "-debug")
    {
        std::cout << "Debug" << std::endl;
        return;
    }

    std::cout << "Executing command_string: " << command_string << std::endl;
    system(command_string.c_str());
}