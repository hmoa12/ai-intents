import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IExpressionProps {
  key: string,
  expression: string
}

const Expression: React.FC<IExpressionProps> = (props: IExpressionProps): React.ReactElement => {

  const {expression} = props;

  return <Typography variant='subtitle2' gutterBottom>User: {expression}</Typography>
}

export default Expression;