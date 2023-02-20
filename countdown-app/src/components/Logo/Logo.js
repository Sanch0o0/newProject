import './Logo.scss';
import logoPic from '../../assets/logo.svg';

export function Logo() {
  return (
    <div className="logo">
      <a href=''>
        <img src={logoPic} alt="logo" />
      </a>
    </div>
  );
}
