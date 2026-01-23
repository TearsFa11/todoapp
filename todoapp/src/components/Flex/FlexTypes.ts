export interface FlexProps {
  $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  $justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  $margin?: string;
}
