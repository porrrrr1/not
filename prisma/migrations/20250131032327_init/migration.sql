/*
  Warnings:

  - You are about to drop the column `ip` on the `camera` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ipAddress]` on the table `Camera` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ipAddress` to the `Camera` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Camera_ip_key` ON `camera`;

-- DropIndex
DROP INDEX `Camera_location_key` ON `camera`;

-- DropIndex
DROP INDEX `Camera_name_key` ON `camera`;

-- AlterTable
ALTER TABLE `camera` DROP COLUMN `ip`,
    ADD COLUMN `ipAddress` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Camera_ipAddress_key` ON `Camera`(`ipAddress`);
