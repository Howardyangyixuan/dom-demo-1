console.log("hi");
let div1 = dom.create("<td>1</td>");
let div2 = dom.create("<td>2</td>");
let div3 = dom.create("<td>3</td>");
let div1_0 = dom.create("<td>1-0</td>");
let div1_1 = dom.create("<td>1-1</td>");

// div.style.color += "red";
// div.innerText += "hi";
dom.after(div1, div2);
dom.before(div1, div3);
dom.append(div1, div1_1);
dom.wrap(div1_1, div1_0);
console.log("1next:" + div1.nextSibling.innerText);
console.log("3next:" + div3.nextSibling.innerText);
console.log("1child:" + div1.children[0].innerText);
console.log("1_0child:" + div1_0.children[0].innerText);
console.dir(div3);
console.log(div2.nextSibling);
const nodes = dom.empty(empty);
console.log(nodes);

dom.attr(div1, "title", "howard");

console.log(dom.attr(div1, "title"));
// dom.text(test, "新内容");
// console.log(dom.text(test));

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.add(test, "blue");

dom.class.remove(test, "blue");
dom.class.remove(test, "red");

console.log(dom.class.has(test, "blue"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(dom.find(".red", testDiv)[0]);
console.log(testDiv);

console.log(dom.parent(test));
console.log(dom.siblings(dom.find("#s2")[0]));
console.log(dom.next(dom.find("#s2")[0]));
console.log(dom.previous(dom.find("#s2")[0]));

const t = dom.find("#travel")[0];
// const t = dom.find("#travel");
console.log(t);
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));
console.log(dom.index(t2));

const div = dom.find("#test>.red")[0]; // 获取对应的元素
console.log(div);

dom.style(div, "color", "red"); // 设置 div.style.color

const divList = dom.find(".red"); // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)); // 遍历 divList 里的所有元素
