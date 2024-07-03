import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProprs {
    className?: string;
}

export const Navbar = ({ className }: NavbarProprs) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>{t('Main Page')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About Page')}</AppLink>
            </div>
        </div>
    );
};
