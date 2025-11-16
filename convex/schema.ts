import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  // -------------------------
  // Auth Tables
  // -------------------------
  ...authTables,

  // -------------------------
  // Subscriptions Table
  // -------------------------
  subscriptions: defineTable({
    userId: v.id("users"),
    polarCustomerId: v.string(),
    polarSubscriptionId: v.string(),
    productId: v.optional(v.string()),
    priceId: v.optional(v.string()),
    planCode: v.optional(v.string()),
    status: v.string(),

    currentPeriodEnd: v.optional(v.number()),
    trialEndsAt: v.optional(v.number()),
    cancelAt: v.optional(v.number()),
    canceledAt: v.optional(v.number()),

    seats: v.optional(v.number()),
    metadata: v.optional(v.any()),

    creditsBalance: v.number(),
    creditsGrantPerPeriod: v.number(),
    creditsRolloverLimit: v.number(),

    lastGrantCursor: v.optional(v.string()),
  })
    .index("by_userId", ["userId"])
    .index("by_polarSubscriptionId", ["polarSubscriptionId"])
    .index("by_status", ["status"]),

  // -------------------------
  // Credits Ledger Table
  // -------------------------
  credits_ledger: defineTable({
    userId: v.id("users"),
    subscriptionId: v.id("subscriptions"),
    amount: v.number(),
    type: v.string(), // "grant" | "consume" | "adjust"
    reason: v.optional(v.string()),
    idempotencyKey: v.optional(v.string()),
    meta: v.optional(v.any()),
  })
    .index("by_subscriptionId", ["subscriptionId"])
    .index('by_userId', ['userId'])
    .index("by_idempotencyKey", ["idempotencyKey"]),

  // -------------------------
  // Projects Table
  // -------------------------
  projects: defineTable({
    userId: v.id("users"),
    name: v.string(),
    description: v.optional(v.string()),

    styleGuide: v.optional(v.string()),
    sketchesData: v.any(), // JSON: Redux shapes state
    viewportData: v.optional(v.any()), // Viewport zoom, scale, positions

    generatedDesignData: v.optional(v.any()), // Generated UI components JSON

    thumbnail: v.optional(v.string()), // Base64 or URL

    moodBoardImages: v.optional(v.array(v.string())), // storage IDs
    inspirationImages: v.optional(v.array(v.string())), // storage IDs

    lastModified: v.number(),
    createdAt: v.number(),

    isPublic: v.optional(v.boolean()),

    tags: v.optional(v.array(v.string())),

    projectNumber: v.number(), // Auto-increment per user
  }).index("by_userId", ["userId"]),

  // -------------------------
  // Project Counters
  // -------------------------
  project_counters: defineTable({
    userId: v.id("users"),
    nextProjectNumber: v.number(),
  }).index("by_userId", ["userId"]),
});

export default schema;
