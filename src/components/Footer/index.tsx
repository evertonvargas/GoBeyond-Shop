import style from "./style.module.scss";

import { MdEmail, MdHeadsetMic } from "react-icons/md";

export function Footer() {
  return (
    <footer className={style.container}>
      <section>
        <div className={style.location}>
          <h2>Localização</h2>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div className={style.contact}>
          <a href="mailto:developercodefull@gmail.com">
            <button>
              <MdEmail size={25} />
              <span>ENTRE EM CONTATO</span>
            </button>
          </a>
          <a href="">
            <button>
              <MdHeadsetMic size={25} />
              <span>FALE COM O NOSSO <br/> CONSULTOR ONLINE</span>
            </button>
          </a>
        </div>
        <div className={style.sponsors}>
          <div>
            <h2>Created By</h2>
            <img src="./images/corebiz.svg" alt="" />
          </div>
          <div>
            <h2>Powered By</h2>
            <img src="./images/vtex.svg" alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
}
