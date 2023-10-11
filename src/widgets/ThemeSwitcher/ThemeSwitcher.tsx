import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'shared/config/themeContext';
import { AppButton, ThemeButton } from 'shared/ui';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets';
import { Theme } from 'shared/config';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();

    const { className } = props;

    return (
        <AppButton
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
        </AppButton>
    );
};
