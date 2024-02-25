import './style.css'
import { setupConnect } from './connect'
import { setupSubmit } from './submit'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
  <h1>Secret Network</h1>
  <div id="links">
    <a href="https://uploads-ssl.webflow.com/632b43ea48475213272bcef4/632dd73d6dfc1b0cba06bbd6_Snakepath_whitepaper.pdf" target="_blank">
    <div class="card">
      Whitepaper
    </div>
    </a>
    <a href="https://github.com/SecretSaturn/TNLS" target="_blank">
    <div class="card">
      GitHub
    </div>
    </a>
    <a href="https://docs.scrt.network/secret-network-documentation/development/ethereum-evm-developer-toolkit/connecting-evm-with-snakepath" target="_blank">
    <div class="card">
      Docs
    </div>
    </a>
  </div>
</header>
  <div>
    <h2>Sample Application: Encrypted KV Store in EVM using Encrypted Payloads</h2>
    <div id="form">
      <button id="submit">Submit</button>
      <form name="inputForm">
      <br>
      <label for="input1"The key</label>
      <input type="number" value="Pick a key" id="input1" name="input1"/>
      <br>
      <br>
      <label for="input2">The value to encrypt</label>
      <input type="number" value="Your secret value" id="input2" name="input2"/>
      <br>
      <br>
      <label for="input3">Your viewing key</label>
      <input type="number" value="Your viewing key" id="input2" name="input2"/>
      <br>
      <br>
      <label for="input4">Callback gas limit</label>
      <input type="number" value="300000" id="input4" name="input4" />
      <br>

    </div>
    <div id="preview" style="word-wrap: break-word;">
    </div>
    <div class="card">
    </div>
  </div>
`
setupSubmit(document.querySelector<HTMLButtonElement>('#submit')!)
setupConnect(document.querySelector<HTMLButtonElement>('#connect')!)