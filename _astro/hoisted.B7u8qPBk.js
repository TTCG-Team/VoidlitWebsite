import{M as r}from"./miner.DICCLyP8.js";import"./NavBar.astro_astro_type_script_index_0_lang.CNq-JdqT.js";import"https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js";import"./index.browser.esm.CTDr-V4f.js";import"./_commonjsHelpers.BosuxZz1.js";import"./events.B-FFxznp.js";import"./binary-layout.BnT34SDH.js";let e=document.querySelector(".content-label"),o=new URL(location.toString()),n=o.searchParams.get("k");if(n){let t=new r;if(t.mount(),t.referrer)e.innerText="You already have an inviter token.";else if(t.getPubkey()===n)e.innerText="Invalidate invite token.";else try{t.setReferrer(n),e.innerHTML="Your inviter token is set.<p>"+n}catch{e.innerText="Invalidate invite token."}}else e.innerText="Invalidate invite token.";let i=document.createElement("a");i.href="/mine";i.innerText="Back to mine page";i.className="link mt-2";e.appendChild(i);setTimeout(()=>{location.href="/mine"},5e3);
