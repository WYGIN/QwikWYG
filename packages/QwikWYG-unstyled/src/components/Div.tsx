import { component$, Slot } from '@builder.io/qwik';

export interface DivProps extends HTMLDIVElement {
  as: HTMLElement | 'string';
}

export type DivType = Omit<DivProps, 'as'>

export const Div = component$<DivProps>((props) => {
  return(
    <props.as {...Omit<DivProps, 'as'>}><Slot /></props.as>
  );
});
