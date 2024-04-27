import type { UserConfig as UserLayoutConfig } from '@layouts/types'
import type { Ref } from 'vue'
import { RouteTransitions, Skins } from './enums'

export interface UserThemeConfig {
  app: {
    title: UserLayoutConfig['app']['title']
    logo: UserLayoutConfig['app']['logo']
    contentWidth: UserLayoutConfig['app']['contentWidth']
    contentLayoutNav: UserLayoutConfig['app']['contentLayoutNav']
    overlayNavFromBreakpoint: UserLayoutConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserLayoutConfig['app']['enableI18n']
    theme: string
    isRtl: UserLayoutConfig['app']['isRtl']
    skin: (typeof Skins)[keyof typeof Skins]
    routeTransition: (typeof RouteTransitions)[keyof typeof RouteTransitions]
    iconRenderer: UserLayoutConfig['app']['iconRenderer']
  }
  navbar: {
    type: UserLayoutConfig['navbar']['type']
    navbarBlur: UserLayoutConfig['navbar']['navbarBlur']
  }
  footer: {
    type: UserLayoutConfig['footer']['type']
  }
  verticalNav: {
    isVerticalNavCollapsed: UserLayoutConfig['verticalNav']['isVerticalNavCollapsed']
    defaultNavItemIconProps: UserLayoutConfig['verticalNav']['defaultNavItemIconProps']
    isVerticalNavSemiDark: boolean
  }
  horizontalNav: {
    type: UserLayoutConfig['horizontalNav']['type']
    transition?: UserLayoutConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserLayoutConfig['icons']['chevronDown']
    chevronRight: UserLayoutConfig['icons']['chevronRight']
    close: UserLayoutConfig['icons']['close']
    verticalNavPinned: UserLayoutConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserLayoutConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserLayoutConfig['icons']['sectionTitlePlaceholder']
  }
}

/*
  TODO: use MergeDeep for DRY
   Waiting for https://github.com/sindresorhus/type-fest/issues/150
*/
export interface ThemeConfig {
  app: {
    title: UserThemeConfig['app']['title']
    logo: UserThemeConfig['app']['logo']
    contentWidth: Ref<UserThemeConfig['app']['contentWidth']>
    contentLayoutNav: Ref<UserThemeConfig['app']['contentLayoutNav']>
    overlayNavFromBreakpoint: UserThemeConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserThemeConfig['app']['enableI18n']
    theme: Ref<UserThemeConfig['app']['theme']>
    isRtl: Ref<UserThemeConfig['app']['isRtl']>
    skin: Ref<UserThemeConfig['app']['skin']>
    routeTransition: Ref<UserThemeConfig['app']['routeTransition']>
    iconRenderer?: UserThemeConfig['app']['iconRenderer']
  }
  navbar: {
    type: Ref<UserThemeConfig['navbar']['type']>
    navbarBlur: Ref<UserThemeConfig['navbar']['navbarBlur']>
  }
  footer: {
    type: Ref<UserThemeConfig['footer']['type']>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<
      UserThemeConfig['verticalNav']['isVerticalNavCollapsed']
    >
    defaultNavItemIconProps: UserThemeConfig['verticalNav']['defaultNavItemIconProps']
    isVerticalNavSemiDark: Ref<
      UserThemeConfig['verticalNav']['isVerticalNavSemiDark']
    >
  }
  horizontalNav: {
    type: Ref<UserThemeConfig['horizontalNav']['type']>
    transition?: UserThemeConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserThemeConfig['icons']['chevronDown']
    chevronRight: UserThemeConfig['icons']['chevronRight']
    close: UserThemeConfig['icons']['close']
    verticalNavPinned: UserThemeConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserThemeConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserThemeConfig['icons']['sectionTitlePlaceholder']
  }
}

// SECTION Custom Input
export interface CustomInputContent {
  title: string
  desc: string
  value: string
  subtitle?: string
  icon?: string
  images?: string
}

export interface GridColumn {
  cols?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

// Data table
export type SortItem = { key: string; order?: boolean | 'asc' | 'desc' }

export interface Options {
  page: number
  itemsPerPage: number
  sortBy: readonly SortItem[]
  groupBy: readonly SortItem[]
  search: string | undefined
}

// 👉 Help center
export type HelpCenterSubcategoryArticlesType = {
  slug: string
  title: string
  content: string
}
export type HelpCenterSubcategoriesType = {
  icon: string
  slug: string
  title: string
  articles: HelpCenterSubcategoryArticlesType[]
}
export type HelpCenterCategoriesType = {
  icon: string
  slug: string
  title: string
  avatarColor: string
  subCategories: HelpCenterSubcategoriesType[]
}
export type HelpCenterArticlesOverviewType = {
  img: string
  slug: string
  title: string
  subtitle: string
}

export interface Faq {
  question: string
  answer: string
}

export interface FaqCategory {
  faqTitle: string
  faqIcon: string
  faqSubtitle: string
  faqs: Faq[]
}

export type ProfileChip = {
  title: string
  color: string
}

export type ProfileTabCommon = {
  icon: string
  value: string
  property: string
}
export type ProfileTeams = ProfileTabCommon & { color: string }

export type ProfileConnections = {
  name: string
  avatar: string
  isFriend: boolean
  connections: string
}

export type ProfileAvatarGroup = {
  name: string
  avatar: string
}

export type ProfileTeamsTech = {
  title: string
  avatar: string
  members: number
  chipText: string
  ChipColor: string
}

export type ConnectionsTab = {
  name: string
  tasks: string
  avatar: string
  projects: string
  connections: string
  designation: string
  isConnected: boolean
  chips: ProfileChip[]
}

export type ProfileTab = {
  teams: ProfileTeams[]
  about: ProfileTabCommon[]
  contacts: ProfileTabCommon[]
  overview: ProfileTabCommon[]
  teamsTech: ProfileTeamsTech[]
  connections: ProfileConnections[]
}

export type ProfileHeader = {
  fullName: string
  coverImg: string
  location: string
  profileImg: string
  joiningDate: string
  designation: string
  designationIcon?: string
}

export type ProjectTableRow = {
  id: number
  date: string
  name: string
  leader: string
  status: number
  avatar?: string
  avatarGroup: string[]
  avatarColor?: string
}

export type ProjectsTab = {
  hours: string
  tasks: string
  title: string
  budget: string
  client: string
  avatar: string
  members: string
  daysLeft: number
  comments: number
  deadline: string
  startDate: string
  totalTask: number
  budgetSpent: string
  description: string
  chipColor: string
  completedTask: number
  avatarColor?: string
  avatarGroup: ProfileAvatarGroup[]
}

export type TeamsTab = {
  title: string
  avatar: string
  description: string
  extraMembers: number
  chips: ProfileChip[]
  avatarGroup: ProfileAvatarGroup[]
}

export type ProfileTab = {
  teams: ProfileTeams[]
  about: ProfileTabCommon[]
  contacts: ProfileTabCommon[]
  overview: ProfileTabCommon[]
  teamsTech: ProfileTeamsTech[]
  connections: ProfileConnections[]
}

// SECTION
// 👉 JWT

export interface User {
  id: number
  name?: string
  username: string
  phone?: string
  email: string
  password: string
  password_confirmation: string
}

export interface UserOut {
  accessToken: string
  userData: Omit<User, 'password'>
}

export interface LoginResponse {
  body: object
  accessToken: string
  userData: AuthUserOut
}

export interface RegisterResponse {
  accessToken: string
  userData: AuthUserOut
}

// !SECTION

// SECTION
// App: User
export interface UserProperties {
  id: number
  name: string
  username: string
  phone: string
  email: string
  password: string
  password_confirmation: string
}

export interface FeatureProperties {
  id: number
  name: string
  username: string
  phone: string
  email: string
  password: string
  password_confirmation: string
}

// !SECTION

// SECTION App: Calendar
export interface CalendarEvent {
  id: string
  url: string
  title: string
  start: Date
  end: Date
  allDay: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendedProps: Record<string, any>
}
// !SECTION

// SECTION App: Invoice

// 👉 Client
export interface Client {
  address: string
  company: string
  companyEmail: string
  country: string
  contact: string
  name: string
}

// 👉 Invoice
export interface Invoice {
  id: number
  issuedDate: string
  client: Client
  service: string
  total: number
  avatar: string
  invoiceStatus: string
  balance: number
  dueDate: string
}

// 👉 PaymentDetails
export interface PaymentDetails {
  totalDue: string
  bankName: string
  country: string
  iban: string
  swiftCode: string
}

// !SECTION App: Invoice

// SECTION App: Email

export type EmailFolder = 'inbox' | 'sent' | 'draft' | 'spam'
export type EmailFilter = EmailFolder | 'trashed' | 'starred'
export type EmailLabel = 'personal' | 'company' | 'important' | 'private'

export interface EmailTo {
  email: string
  name: string
}

export interface EmailFrom {
  email: string
  name: string
  avatar: any
}

export interface EmailAttachment {
  fileName: string
  thumbnail: any
  url: string
  size: string
}

/*
  - You can have draft mail in your inbox
    - We can have flag isDraft for mail
  - You can't move sent mail to inbox
  - You can move sent mail to inbox

  --- above are gmail notes

  - We will provide inbox, spam & sent as folders
    - You can't move any mail in sent folder. Sent mail can be deleted or retrieved back
  - We will provide isDraft, isSpam, isTrash as flags
  - draft is flag
  - trash is flag
  - spam email can be moved to inbox only
  - We will provide isDeleted flag

  === this is too confusing 😔

  // this is final now 💯
  folders => inbox, sent, draft, spam
  flags: starred, trash
*/
export interface Email {
  id: number
  to: EmailTo[]
  from: EmailFrom
  subject: string
  cc: string[]
  bcc: string[]
  message: string
  attachments: EmailAttachment[]
  time: string
  replies: Email[]

  labels: EmailLabel[]

  folder: EmailFolder

  // Flags 🚩
  isRead: boolean
  isStarred: boolean
  isDeleted: boolean
}

export interface FetchEmailsPayload {
  q?: string
  filter?: EmailFilter
  label?: EmailLabel
}

// !SECTION Apps: Email

// SECTION App: Chat
export type ChatStatus = 'online' | 'offline' | 'busy' | 'away'

export interface ChatContact {
  id: number
  fullName: string
  role: string
  about: string
  avatar: string
  status: ChatStatus
}

export interface ChatMessage {
  message: string
  time: string
  senderId: number
  feedback: {
    isSent: boolean
    isDelivered: boolean
    isSeen: boolean
  }
}

export interface Chat {
  id: number
  userId: number
  unseenMsgs: number
  messages: ChatMessage[]
}

// ℹ️ This is chat type received in response of user chat
export interface ChatOut {
  id: Chat['id']
  unseenMsgs: Chat['unseenMsgs']
  messages: ChatMessage[]
  lastMessage: ChatMessage[number]
}

export interface ChatContactWithChat extends ChatContact {
  chat: ChatOut
}
// !SECTION App: Chat

// 👉 Template Search
//----------------
export type SearchItem = {
  id: number
  url: { name: string; params?: object }
  icon: string
  title: string
  category: string
}

export type SearchHeader = {
  header: string
  title: string
}

export type Permission = {
  id: number
  name: string
  createdDate: string
  assignedTo: string[]
}

export type Data = {
  responsive_id: string
  id: number
  avatar: string
  full_name: string
  post: string
  email: string
  city: string
  start_date: date
  salary: number
  age: string | number
  experience: string
  status: number
}

export interface Product {
  id: number
  name: string
  slug: string
  brand: string
  category: string
  price: number
  image: string
  hasFreeShipping: boolean
  rating: number
  description: string
}

export interface Buyer {
  name: string
  avatar: string | null
}

export interface Payment {
  total: number
  received_payment_status: string
  paid_amount: number
  status: string
}

export type SalesDetails = {
  product: Product
  buyer: Buyer
  date: string
  payment: Payment
}
