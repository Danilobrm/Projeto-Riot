import React from 'react';
import { LoginSocial } from './styled';
import logoFacebook from '../../../../../assets/facebook-logo.png';
import logoGoogle from '../../../../../assets/logo-google.avif';
import logoApple from '../../../../../assets/apple-logo.png';
import logoXbox from '../../../../../assets/xbox-logo.png';

export default function LoginSocialComponent() {
  return (
    <LoginSocial>
      <button>
        <span>
          <img src={logoFacebook} alt="logo facebook" />
        </span>
      </button>

      <button>
        <span>
          <img src={logoGoogle} alt="logo google" />
        </span>
      </button>

      <button>
        <span>
          <img src={logoApple} alt="logo apple" />
        </span>
      </button>

      <button>
        <span>
          <img src={logoXbox} alt="logo xbox" />
        </span>
      </button>
    </LoginSocial>
  );
}
