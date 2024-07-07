export type MemberCertificateType = {
    title: string | JSX.Element
    datetime: string | JSX.Element
}

export type MemberRaceExperienceType = {
    title: string | JSX.Element
    result: string | JSX.Element
    datetime: string | JSX.Element
}

export type MemberParticipateType = {
    title: string | JSX.Element,
    datetime: string | JSX.Element
}

export type MemberInternType = {
    company: string | JSX.Element,
    info: string | JSX.Element,
    datetime: string | JSX.Element
}

export type MemberArticleType = {
    authors: string,
    title: string,
    target: string
    details: string
    doi?: string
}