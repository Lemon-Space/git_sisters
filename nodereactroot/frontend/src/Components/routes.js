import Admin from './Admin/Admin'
import Auth  from './Admin/Auth'

import {Main} from './Main'
import {Education} from './Education';

import {Manicure} from '../CatalogsItem/Manicure/Manicure';
import {FlaxLashes} from '../CatalogsItem/FlaxLashes/FlaxLashes'
import {Hair} from '../CatalogsItem/Hair/Hair'
import {Cosmo} from '../CatalogsItem/Cosmetaligia/Cosmo'
import {Shugaring} from '../CatalogsItem/Shugaring/Shugaring'
import {ShugaringPrise} from '../Price/Shugaring/ShugaringPrise';
import {MakeupPrise }from '../Price/Makeup/MakeupPrise';
import {CosmeticsPrise} from '../Price/Cosmetics/CosmeticsPrise';
import {EyebrowPrise} from '../Price/Eyebrow/EyebrowPrise';
import {ManicurePrise }from '../Price/Manicure/ManicurePrise';
import {HairwomenPrise} from '../Price/Hairwomen/HairwomenPrise';
import {HairmanPrise }from '../Price/Hairman/HairmanPrise';
import {MassagePrise} from '../Price/Massage/MassagePrise';

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/auth',
        Component: Auth
    },
    {
        path: '/',
        Component: Main
    },
    {
        path: '/main',
        Component: Main
    },
    {
        path: '/edu',
        Component: Education
    },
    {
        path: '/nails',
        Component: Manicure
    },
    {
        path: '/flax',
        Component: FlaxLashes
    },
    {
        path: '/hair',
        Component: Hair
    },
    {
        path: '/cosmo',
        Component: Cosmo
    },
    {
        path: '/shugaring',
        Component: Shugaring
    },

    {
        path: '/price/:id',
        Component: Shugaring
    },


    {
        path: '/PriceMakeup',
        Component: MakeupPrise
    },
    {
        path: '/PriceCosmetics',
        Component: CosmeticsPrise
    },
    {
        path: '/PriceEyeLash',
        Component: EyebrowPrise
    },
    {
        path: '/PriceManicure',
        Component: ManicurePrise
    },
    {
        path: '/PriceHairWomen',
        Component: HairwomenPrise
    },
    {
        path: '/PriceHairMan',
        Component: HairmanPrise
    },
    {
        path: '/PriceMassage',
        Component: MassagePrise
    },
    {
        path: '/PriceShugaring',
        Component: ShugaringPrise
    },
]