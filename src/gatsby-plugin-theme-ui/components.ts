import Prism from '@theme-ui/prism';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default {
  pre: (props: Props) => props.children,
  code: Prism,
};
