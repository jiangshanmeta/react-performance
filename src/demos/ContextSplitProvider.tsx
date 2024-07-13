import { createContext, ReactNode, useState, useCallback, useMemo } from "react"

const ContextData = createContext({ isNavExpanded: false });

const ContextApi = createContext({ open: () => { }, close: () => { } });

export const ContextController = ({ children }: { children: ReactNode }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const open = useCallback(() => setIsNavExpanded(true), []);

    const close = useCallback(() => setIsNavExpanded(false), []);

    const data = useMemo(() => ({ isNavExpanded }), [isNavExpanded]);

    const api = useMemo(() => ({ open, close }), [close, open]);

    return (
        <ContextData.Provider value={data}>
            <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
        </ContextData.Provider>
    );
};