import tw from 'tailwind-styled-components';

export const AllContainer = tw.div`
flex
flex-col
items-start
p-5
max-w-[850px]
`

export const TitleContainer = tw.div`
flex
flex-col
grow
w-full
`

export const Title = tw.p`
text-xl
mb-[0.5rem]
font-medium
`

export const ContentContainer = tw.div`
flex
flex-col
w-full
grow-1
`
export const UserBox = tw.div`
flex
m-5
items-center
w-full
`

export const UserName = tw.div`
text-[#39739D]
hover:text-blue
`

export const Line = tw.hr`
w-full
mt-3
mb-10
`

export const AllAnswer = tw.div`
flex
flex-col
w-full
`

export const Blank = tw.div`
grow
`