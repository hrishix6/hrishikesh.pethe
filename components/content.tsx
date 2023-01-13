import { NextPage } from 'next';

interface Props {
  children?: React.ReactNode;
}

export const Content: NextPage<Props> = (props) => {
  return <div className="mx-auto mt-6 lg:w-2/4 sm:w-auto">{props.children}</div>;
};
