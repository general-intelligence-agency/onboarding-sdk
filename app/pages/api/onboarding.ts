import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const formData = req.body;

    const result = await prisma.$transaction(async (tx) => {
      const entity = await tx.entity.create({
        data: {
          name: formData.firmName,
          website: formData.websiteUrl,
          custom_fields: {
            registrationNumber: formData.registrationNumber,
            barAssociationNumber: formData.barAssociationNumber,
            jurisdiction: formData.jurisdiction,
          },
          owner_first_name: formData.ownerFirstName,
          owner_last_name: formData.ownerLastName,
          ownership_percentage: parseFloat(formData.ownershipPercentage),
        },
      });

      const application = await tx.application.create({
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          entity_id: entity.id,
        },
      });

      return { entity, application };
    });

    console.log("Form submitted:", result);
    return res.status(200).json({ message: "Onboarding successful" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
