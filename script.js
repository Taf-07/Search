const jaff = document.getElementById("jaff");
const select = document.getElementById("engine");
const bar = document.getElementById("row");

select.addEventListener("input", (e) => {
    set();
});
bar.addEventListener("click", (e) => {
    set();
});
function set() {
    jaff.action = `${select.value}`;
}