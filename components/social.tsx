import { NextPage } from 'next';

interface Props {
  href: string;
  ariaLabel: string;
  svg: React.ReactNode;
  rel?: string;
  target?: string;
}

const SocialLink: NextPage<Props> = (props) => {
  return (
    <a
      className="group -m-1 p-1"
      href={props.href}
      rel={props.rel}
      {...(props.target ? { target: props.target } : {})}
    >
      {props.svg}
    </a>
  );
};

export default SocialLink;
