import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: {
        startDate: 'desc'
      }
    })

    return NextResponse.json(experiences)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { jobTitle, company, location, startDate, endDate, current, achievements } = body

    const experience = await prisma.experience.create({
      data: {
        jobTitle,
        company,
        location,
        startDate,
        endDate,
        current: current || false,
        achievements
      }
    })

    return NextResponse.json(experience)
  } catch (error) {
    console.error('Error creating experience:', error)
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 })
  }
}
