const root = document.querySelector("#root");

const data = [
  {
    id: 1,
    title: "10 company",
    text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
  {
    id: 2,
    title: "20 company",
    text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.v1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.1Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
  {
    id: 3,
    title: "30 company",
    text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
  {
    id: 4,
    title: "40 company",
    text: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
  {
    id: 5,
    title: "50 company",
    text: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
  {
    id: 6,
    title: "60 company",
    text: "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem debitis nobis eius officiis, dignissimos blanditiis et molestias, ipsam distinctio odit. Quidem eos eum illum nam, nostrum debitis natus autem.",
  },
];

const btn_container = document.createElement("div");
btn_container.classList.add("btn_container");

const text_container = document.createElement("div");
text_container.classList.add("text_container");

root.append(btn_container, text_container);

data.forEach((elem) => {
  const btn = document.createElement("button");
  btn.innerText = elem.title;

  btn_container.append(btn);

  btn.onclick = () => {
    text_container.innerText = elem.text;
    Array.from(btn_container.children).forEach((element) => {
      element.classList.remove("active");
    });
    btn.classList.add("active");
  };
});

btn_container.children[0].click();
btn_container.children[0].classList.add("active");
