function e(e){return`\n    <p>Result is: ${e}</p>\n    `}const t=document.getElementById("resultContainer");document.querySelector(".submitBtn").addEventListener("click",(function(n){n.preventDefault();const r=document.querySelector(".textarea").value.trim(),u=e=>e.find(((e,t,n)=>!n.filter(((e,n)=>n!==t)).includes(e))),i=r.split(" ").map((e=>{const t=e.split("");return u(t)})),c=u(i);t.innerHTML=e(c)}));
//# sourceMappingURL=index.4d318e45.js.map