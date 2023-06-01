interface Props {
    className?: string
    children: string;
}

export function Title({ className, children }: Props) {
    return <h3 className={`${className} tracking-widest uppercase text-amber-400 font-medium`}>{children}</h3>
}