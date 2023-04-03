const defangIPaddr = (address) => {
    return address.split(".").join("[.]").toString();
    // return address.replaceAll(".", "[.]")
};
