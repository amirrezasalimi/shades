/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
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

export enum PalettesReferralOptions {
	"figma" = "figma",
	"twitter" = "twitter",
	"google" = "google",
	"producthunt" = "producthunt",
}
export type PalettesRecord<Tdata = unknown, Tfull_data = unknown> = {
	ai_prompt?: string
	data?: null | Tdata
	fingerprint?: string
	full_data?: null | Tfull_data
	ip?: string
	prompt?: string
	referral?: PalettesReferralOptions
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type PalettesResponse<Tdata = unknown, Tfull_data = unknown, Texpand = unknown> = Required<PalettesRecord<Tdata, Tfull_data>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	palettes: PalettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	palettes: PalettesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'palettes'): RecordService<PalettesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
