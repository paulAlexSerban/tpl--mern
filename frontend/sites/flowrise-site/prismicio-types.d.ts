// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type GenericDocumentDataSlicesSlice =
    | FeaturesSlice
    | TextWithImageSlice
    | TestimonialsSlice
    | HeroSlice
    | CallToActionSlice;

/**
 * Content for Generic documents
 */
interface GenericDocumentData {
    /**
     * Slice Zone field in *Generic*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: generic.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<GenericDocumentDataSlicesSlice> /**
     * Meta Title field in *Generic*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: generic.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Generic*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: generic.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *Generic*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: generic.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * Generic document from Prismic
 *
 * - **API ID**: `generic`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GenericDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
    Simplify<GenericDocumentData>,
    'generic',
    Lang
>;

type HomepageDocumentDataSlicesSlice =
    | TextWithImageSlice
    | CallToActionSlice
    | TestimonialsSlice
    | FeaturesSlice
    | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    title: prismic.KeyTextField;

    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#slices
     */
    slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
     * Meta Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A title of the page used for social media and search engines
     * - **API ID Path**: homepage.meta_title
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */;
    meta_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: A brief summary of the page
     * - **API ID Path**: homepage.meta_description
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * Meta Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.meta_image
     * - **Tab**: SEO & Metadata
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
    /**
     * Link field in *Settings → Navigation*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.navigation[].link
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    link: prismic.LinkField;

    /**
     * Label field in *Settings → Navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.navigation[].label
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.site_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    site_title: prismic.KeyTextField;

    /**
     * Meta Description field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.meta_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    meta_description: prismic.KeyTextField;

    /**
     * OG Image field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.og_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    og_image: prismic.ImageField<never>;

    /**
     * Navigation field in *Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.navigation[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    'settings',
    Lang
>;

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
    /**
     * Name field in *Testimonial*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Testimonial author  name
     * - **API ID Path**: testimonial.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    name: prismic.KeyTextField;

    /**
     * Job Title field in *Testimonial*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.job_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    job_title: prismic.KeyTextField;

    /**
     * Quote field in *Testimonial*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Quote text.
     * - **API ID Path**: testimonial.quote
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    quote: prismic.RichTextField;

    /**
     * Avatar field in *Testimonial*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.avatar
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    avatar: prismic.ImageField<never>;
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
    Simplify<TestimonialDocumentData>,
    'testimonial',
    Lang
>;

export type AllDocumentTypes = GenericDocument | HomepageDocument | SettingsDocument | TestimonialDocument;

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
    /**
     * Heading field in *CallToAction → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: CTA Heading
     * - **API ID Path**: call_to_action.default.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Body field in *CallToAction → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: CTA body text
     * - **API ID Path**: call_to_action.default.primary.body
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    body: prismic.RichTextField;

    /**
     * Button Link field in *CallToAction → Default → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.default.primary.button_link
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    button_link: prismic.LinkField;

    /**
     * Button Text field in *CallToAction → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.default.primary.button_text
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    button_text: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<CallToActionSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<'call_to_action', CallToActionSliceVariation>;

/**
 * Item in *Features → Default → Primary → Feature List*
 */
export interface FeaturesSliceDefaultPrimaryFeatureListItem {
    /**
     * Icon field in *Features → Default → Primary → Feature List*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: calendar
     * - **API ID Path**: features.default.primary.feature_list[].icon
     * - **Documentation**: https://prismic.io/docs/field#select
     */
    icon: prismic.SelectField<'calendar' | 'bargraph' | 'clover' | 'hourglass', 'filled'>;

    /**
     * Title field in *Features → Default → Primary → Feature List*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Feature title
     * - **API ID Path**: features.default.primary.feature_list[].title
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    title: prismic.RichTextField;

    /**
     * Description field in *Features → Default → Primary → Feature List*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Feature description text
     * - **API ID Path**: features.default.primary.feature_list[].description
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    description: prismic.RichTextField;
}

/**
 * Primary content in *Features → Default → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
    /**
     * Heading field in *Features → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Featured heading
     * - **API ID Path**: features.default.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Feature List field in *Features → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: features.default.primary.feature_list[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    feature_list: prismic.GroupField<Simplify<FeaturesSliceDefaultPrimaryFeatureListItem>>;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<FeaturesSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<'features', FeaturesSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
    /**
     * Heading field in *Hero → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Flowrise heading
     * - **API ID Path**: hero.default.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Body field in *Hero → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.body
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    body: prismic.RichTextField;

    /**
     * Button Text field in *Hero → Default → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Button label
     * - **API ID Path**: hero.default.primary.button_text
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    button_text: prismic.KeyTextField;

    /**
     * Button Link field in *Hero → Default → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Button link
     * - **API ID Path**: hero.default.primary.button_link
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    button_link: prismic.LinkField;

    /**
     * Image field in *Hero → Default → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.default.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<'default', Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Primary content in *Hero → Horizontal → Primary*
 */
export interface HeroSliceHorizontalPrimary {
    /**
     * Heading field in *Hero → Horizontal → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Flowrise heading
     * - **API ID Path**: hero.horizontal.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Body field in *Hero → Horizontal → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.horizontal.primary.body
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    body: prismic.RichTextField;

    /**
     * Button Text field in *Hero → Horizontal → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Button label
     * - **API ID Path**: hero.horizontal.primary.button_text
     * - **Documentation**: https://prismic.io/docs/field#key-text
     */
    button_text: prismic.KeyTextField;

    /**
     * Button Link field in *Hero → Horizontal → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Button link
     * - **API ID Path**: hero.horizontal.primary.button_link
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    button_link: prismic.LinkField;

    /**
     * Image field in *Hero → Horizontal → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.horizontal.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;
}

/**
 * Horizontal variation for Hero Slice
 *
 * - **API ID**: `horizontal`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHorizontal = prismic.SharedSliceVariation<
    'horizontal',
    Simplify<HeroSliceHorizontalPrimary>,
    never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHorizontal;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *Testimonials → Default → Primary → Testimonial List*
 */
export interface TestimonialsSliceDefaultPrimaryTestimonialListItem {
    /**
     * Testimonial field in *Testimonials → Default → Primary → Testimonial List*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.default.primary.testimonial_list[].testimonial
     * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
     */
    testimonial: prismic.ContentRelationshipField<'testimonial'>;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
    /**
     * Heading field in *Testimonials → Default → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Testimonials heading
     * - **API ID Path**: testimonials.default.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Testimonial List field in *Testimonials → Default → Primary*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.default.primary.testimonial_list[]
     * - **Documentation**: https://prismic.io/docs/field#group
     */
    testimonial_list: prismic.GroupField<Simplify<TestimonialsSliceDefaultPrimaryTestimonialListItem>>;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<TestimonialsSliceDefaultPrimary>,
    never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<'testimonials', TestimonialsSliceVariation>;

/**
 * Primary content in *TextWithImage → Image Right → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
    /**
     * Heading field in *TextWithImage → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with image heading
     * - **API ID Path**: text_with_image.default.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Body field in *TextWithImage → Image Right → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with image body text
     * - **API ID Path**: text_with_image.default.primary.body
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    body: prismic.RichTextField;

    /**
     * Image field in *TextWithImage → Image Right → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.default.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;
}

/**
 * Image Right variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
    'default',
    Simplify<TextWithImageSliceDefaultPrimary>,
    never
>;

/**
 * Primary content in *TextWithImage → Image Left → Primary*
 */
export interface TextWithImageSliceImageLeftPrimary {
    /**
     * Heading field in *TextWithImage → Image Left → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with image heading
     * - **API ID Path**: text_with_image.imageLeft.primary.heading
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    heading: prismic.RichTextField;

    /**
     * Body field in *TextWithImage → Image Left → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with image body text
     * - **API ID Path**: text_with_image.imageLeft.primary.body
     * - **Documentation**: https://prismic.io/docs/field#rich-text-title
     */
    body: prismic.RichTextField;

    /**
     * Image field in *TextWithImage → Image Left → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.imageLeft.primary.image
     * - **Documentation**: https://prismic.io/docs/field#image
     */
    image: prismic.ImageField<never>;
}

/**
 * Image Left variation for TextWithImage Slice
 *
 * - **API ID**: `imageLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceImageLeft = prismic.SharedSliceVariation<
    'imageLeft',
    Simplify<TextWithImageSliceImageLeftPrimary>,
    never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceImageLeft;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<'text_with_image', TextWithImageSliceVariation>;

declare module '@prismicio/client' {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }

    namespace Content {
        export type {
            GenericDocument,
            GenericDocumentData,
            GenericDocumentDataSlicesSlice,
            HomepageDocument,
            HomepageDocumentData,
            HomepageDocumentDataSlicesSlice,
            SettingsDocument,
            SettingsDocumentData,
            SettingsDocumentDataNavigationItem,
            TestimonialDocument,
            TestimonialDocumentData,
            AllDocumentTypes,
            CallToActionSlice,
            CallToActionSliceDefaultPrimary,
            CallToActionSliceVariation,
            CallToActionSliceDefault,
            FeaturesSlice,
            FeaturesSliceDefaultPrimaryFeatureListItem,
            FeaturesSliceDefaultPrimary,
            FeaturesSliceVariation,
            FeaturesSliceDefault,
            HeroSlice,
            HeroSliceDefaultPrimary,
            HeroSliceHorizontalPrimary,
            HeroSliceVariation,
            HeroSliceDefault,
            HeroSliceHorizontal,
            TestimonialsSlice,
            TestimonialsSliceDefaultPrimaryTestimonialListItem,
            TestimonialsSliceDefaultPrimary,
            TestimonialsSliceVariation,
            TestimonialsSliceDefault,
            TextWithImageSlice,
            TextWithImageSliceDefaultPrimary,
            TextWithImageSliceImageLeftPrimary,
            TextWithImageSliceVariation,
            TextWithImageSliceDefault,
            TextWithImageSliceImageLeft,
        };
    }
}
