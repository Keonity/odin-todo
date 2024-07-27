export default function clearChildren(parent, minChildren) {
    while (parent.childElementCount > minChildren) {
        console.log(parent);
        parent.removeChild(parent.lastChild);
    };
};