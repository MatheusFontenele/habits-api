import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2024-01-31T03:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2024-03-03T03:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2024-03-08T03:00:00.000')

async function run() {
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  const user = await prisma.user.create({
    data: {
      name: 'User Test',
      email: 'mail@mail.com',
      password: '123456',
      avatar: 'avatar.jpg'
    }
  })


  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        name: 'Beber 2L água',
        created_at: firstHabitCreationDate,
        user_id: user.id,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        name: 'Exercitar',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        },
        user_id: user.id
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        name: 'Dormir 8h',
        created_at: thirdHabitCreationDate,
        user_id: user.id,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    })
  ])

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2024-03-02T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2024-03-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/2
     */
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2024-03-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })