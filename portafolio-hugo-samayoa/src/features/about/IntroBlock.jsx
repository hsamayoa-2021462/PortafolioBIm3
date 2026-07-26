import DotPattern from '../../shared/components/ui/DotPattern';
import { PROFILE } from '../../shared/data/profileData';

export default function IntroBlock() {
  return (
    <div className="intro">
      <DotPattern corner="top-left" floating />
      <DotPattern corner="bottom-right" floating />

      <div className="intro__text" data-reveal>
        <p className="intro__greeting">¡Hola!</p>
        <h3 className="intro__name">Soy {PROFILE.nombre.split(' ')[0]}</h3>
        <span className="intro__rule" />
        <p className="intro__bio">{PROFILE.bio}</p>
      </div>

      <div className="intro__photo" data-reveal>
        {/*
          Coloca la foto de perfil en:
          public/assets/images/profile/foto-perfil.jpg
          y descomenta la etiqueta <img> de abajo.
        */}
        <div className="intro__photo-frame">
          {/* <img src={PROFILE.photo} alt={`Foto de ${PROFILE.nombre}`} /> */}
          <span className="intro__photo-placeholder">
            Espacio para foto de perfil
            <small>public/assets/images/profile/</small>
          </span>
        </div>
      </div>
    </div>
  );
}
