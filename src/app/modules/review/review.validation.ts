import { EReferralStatus } from '@prisma/client';
import { z } from 'zod';

const createValidation = z.object({
  body: z.array(
    z.object({
      sellerId: z.string({ required_error: 'Seller id is required!' }),
      reviewText: z.string({ required_error: 'reviewText is required!' }),
      isAnonymous: z.boolean({ required_error: 'isAnonymous is required!' }),
      reviewStatus: z.enum([...Object.values(EReferralStatus)] as [
        string,
        ...string[]
      ]),
    })
  ),
});
const updateValidation = z.object({
  body: z.object({}),
});
export const ReviewValidation = {
  createValidation,
  updateValidation,
};