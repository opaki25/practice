const topics = ["add","multiply","at-least","clamp","divisible","take","suffix","power","above","offset"];
const list = document.querySelector('#exercises');
for (let i=1;i<=1000;i++) {
  const id = String(i).padStart(4,'0');
  const topic = topics[(i-1)%topics.length];
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = 'exercises/' + id + '-' + topic + '.cjs';
  link.textContent = id + ' - ' + topic;
  item.append(link);
  list.append(item);
}
function filter() {
  const query = document.querySelector('#search').value.trim().toLowerCase();
  let count = 0;
  for (const item of list.children) {
    item.hidden = !item.textContent.toLowerCase().includes(query);
    if (!item.hidden) count++;
  }
  document.querySelector('#count').textContent = count + ' exercises';
}
document.querySelector('#search').addEventListener('input', filter);
filter();
