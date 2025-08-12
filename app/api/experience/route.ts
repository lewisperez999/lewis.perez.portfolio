import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: {
        order: 'asc'
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
    const { role, company, period, achievements, order } = body

    const experience = await prisma.experience.create({
      data: {
        role,
        company,
        period,
        achievements,
        order: order || 0
      }
    })

    return NextResponse.json(experience)
  } catch (error) {
    console.error('Error creating experience:', error)
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 })
  }
}
