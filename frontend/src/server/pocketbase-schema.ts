/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Config = "config",
	FigmaForks = "figma_forks",
	FigmaUsers = "figma_users",
	FigmaViews = "figma_views",
	Palettes = "palettes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ConfigRecord = {
	key?: string
	value?: string
}

export type FigmaForksRecord = {
	ip?: string
	palette?: RecordIdString
	user?: RecordIdString
}

export type FigmaUsersRecord = {
	color?: string
	name?: string
	photo?: string
	session?: number
	uid?: string
}

export type FigmaViewsRecord = {
	ip?: string
	user?: RecordIdString
}

export enum PalettesReferralOptions {
	"figma" = "figma",
	"twitter" = "twitter",
	"google" = "google",
	"producthunt" = "producthunt",
}
export type PalettesRecord<Tdata = unknown, Tusage = unknown> = {
	ai_prompt?: string
	cost?: number
	data?: null | Tdata
	figma_user?: RecordIdString
	fingerprint?: string
	ip?: string
	model_id?: string
	prompt?: string
	referral?: PalettesReferralOptions
	usage?: null | Tusage
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConfigResponse<Texpand = unknown> = Required<ConfigRecord> & BaseSystemFields<Texpand>
export type FigmaForksResponse<Texpand = unknown> = Required<FigmaForksRecord> & BaseSystemFields<Texpand>
export type FigmaUsersResponse<Texpand = unknown> = Required<FigmaUsersRecord> & AuthSystemFields<Texpand>
export type FigmaViewsResponse<Texpand = unknown> = Required<FigmaViewsRecord> & BaseSystemFields<Texpand>
export type PalettesResponse<Tdata = unknown, Tusage = unknown, Texpand = unknown> = Required<PalettesRecord<Tdata, Tusage>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	config: ConfigRecord
	figma_forks: FigmaForksRecord
	figma_users: FigmaUsersRecord
	figma_views: FigmaViewsRecord
	palettes: PalettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	config: ConfigResponse
	figma_forks: FigmaForksResponse
	figma_users: FigmaUsersResponse
	figma_views: FigmaViewsResponse
	palettes: PalettesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'config'): RecordService<ConfigResponse>
	collection(idOrName: 'figma_forks'): RecordService<FigmaForksResponse>
	collection(idOrName: 'figma_users'): RecordService<FigmaUsersResponse>
	collection(idOrName: 'figma_views'): RecordService<FigmaViewsResponse>
	collection(idOrName: 'palettes'): RecordService<PalettesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
