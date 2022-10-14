const body = document.getElementsByTagName('body')[0];
console.dir(body)

const btn = document.getElementById('testBtn')
console.dir(btn)

const text = body.firstElementChild;
console.dir(text)


function hideShowText() {
  if (text.style.display === 'none') {
    text.style.display = 'block';
    btn.innerText = 'Hide text'
  } else {
    text.style.display = 'none'
    btn.innerText = 'Show text'
  }
}

btn.onclick = hideShowText