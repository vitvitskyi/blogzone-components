import React, {FC, useCallback} from 'react';

interface TabDictionary {
    [key: number]: string;
}

type TabsProps = {
    activeTab: number | undefined;
    changeTab: (id: number) => void;
    tabs: TabDictionary[];
    isBottomLine?: boolean;
    style: object;
};

type TabProps = {
    activeTab: number | undefined;
    changeTab: (id: number) => void;
    id: number;
    name: string;
    style: object;
};

export const Tab: FC<TabProps> = ({activeTab, style, changeTab, name, id}) => {
    const onClick = useCallback(() => changeTab(id), [changeTab, id]);

    return (
        <p style={style} onClick={onClick}>
            {name}
        </p>
    );
};

export const Tabs: FC<TabsProps> = ({
                                        activeTab,
                                        style,
                                        tabs,
                                        changeTab,
                                        isBottomLine = true,
                                    }) => {
    return (
        <section>
            {Object.keys(tabs).map(tabId => (
                <Tab
                    key={tabId}
                    style={style}
                    activeTab={activeTab}
                    changeTab={changeTab}
                    name={tabs[Number(tabId)] as string}
                    id={Number(tabId)}
                />
            ))}
        </section>
    );
};
