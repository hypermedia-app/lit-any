function fieldsAreIterable(contract) {
    // checks for null and undefined
    if (contract.fields == null) {
        return false;
    }
    return typeof contract.fields[Symbol.iterator] === 'function';
}

function hasAnythingToRender(contract) {
    return !!contract.title || fieldsAreIterable(contract);
}

export default {
    hasAnythingToRender,
    fieldsAreIterable,
};
