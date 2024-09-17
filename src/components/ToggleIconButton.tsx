import {
  darken,
  IconButton,
  IconButtonProps,
  Theme,
  useTheme,
} from '@mui/material';
import { FC } from 'react';

interface ToggleIconButtonProps extends IconButtonProps {
  isToggled?: boolean;
  iconColor?: ((value: Theme) => string) | string;
}

const ToggleIconButton: FC<ToggleIconButtonProps> = ({
  isToggled = false,
  children,
  iconColor,
  ...rest
}) => {
  const theme = useTheme();
  const { palette } = theme;

  const resolvedIconColor =
    typeof iconColor === 'function' ? iconColor(theme) : iconColor;

  const backgroundCol =
    iconColor && isToggled
      ? iconColor
      : !iconColor && isToggled
      ? palette.primary.main
      : null;

  const borderCol = isToggled
    ? palette.common.white
    : iconColor && !isToggled
    ? resolvedIconColor
    : palette.primary.main;

  const col = isToggled
    ? palette.common.white
    : iconColor && !isToggled
    ? iconColor
    : palette.primary.main;

  const onHoverBgCol =
    iconColor && isToggled
      ? darken(resolvedIconColor || '', 0.5)
      : !iconColor && isToggled
      ? palette.primary.dark
      : null;

  return (
    <IconButton
      sx={{
        //   isToggled ? palette.common.white : palette.primary.main,
        color: col,
        // border: ({ palette }) =>
        //   `1px solid ${
        //     isToggled ? palette.common.white : palette.primary.main
        //   }`,
        border: `1px solid ${borderCol}`,
        // backgroundColor: ({ palette }) =>
        //   isToggled ? palette.primary.main : null,
        backgroundColor: backgroundCol,
        borderRadius: '8px',
        '&:hover': {
          // backgroundColor: ({ palette }) =>
          // isToggled ? palette.primary.dark : palette.grey[200],
          backgroundColor: onHoverBgCol,
        },
      }}
      {...rest}>
      {children}
    </IconButton>
  );
};

export default ToggleIconButton;
