import tw from 'tailwind-styled-components';

export const FooterContainer = tw.div`
flex
w-[100%]
bg-[#242629]
h-auto
text-white
px-40
py-3
`

export const MenuList = tw.ul`
flex
flex-col
mr-20
my-5
`

export const LastList = tw(MenuList)`
justify-between
`

export const MenuTitle = tw.div`
font-extrabold
text-sm
mb-4
text-[#9299A0]
`

export const MenuItem = tw.li`
mb-2
text-[#9299A0]
text-sm
`

export const SmallLink = tw.a`
text-xs
text-[#9299A0]
mx-2
`