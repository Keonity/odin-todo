export default function clearChildren(parent, minChildren) {
    while (parent.childElementCount > minChildren) {
        // console.log(`Parent: ` + parent);
        parent.removeChild(parent.lastChild);
    };
};