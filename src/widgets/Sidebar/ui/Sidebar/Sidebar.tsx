import { memo, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { AppButton, AppLinkTheme, ButtonTheme } from 'shared/ui'
import { ButtonSize } from 'shared/ui/AppButton/AppButton'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface ISidebarProps {
  className?: string
}

export const Sidebar = memo((props: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapse = (): void => {
        setCollapsed((prev) => !prev)
    }
    const [state, setState] = useState(0);

    const { className } = props;
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppButton
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                className={cls.sidebarButton}
                onClick={toggleCollapse}>
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        path={item.path}
                        text={item.text}
                        Icon={item.Icon}
                        collapsed={collapsed}
                        theme={AppLinkTheme.PRIMARY} />
                ))}
                <button onClick={() => { setState(state + 1); }}>CKLIC</button>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher className={classNames('', { [cls.margin]: !collapsed }, [])} />
                <LangSwitcher isShort={collapsed}/>
            </div>
        </div>
    )
})
